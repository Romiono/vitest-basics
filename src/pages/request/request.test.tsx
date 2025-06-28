import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";
import {UserApi} from "../../api/UserApi.ts";
import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router";
import Request from "./request.tsx";
import "@testing-library/jest-dom/vitest";


const mockData = [
    {
        name: 'johny',
        email: 'silverhand@gmail.com'
    },
    {
        name: 'ann',
        email: 'anny@gmail.com'
    }
]

describe('request tests', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData)
            } as Response)
        )
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    it('test only requested', async () => {
        const data = await UserApi.get()
        expect(data).toEqual(mockData)
        expect(fetch).toBeCalledTimes(1)
    })

    it('test request with component rendering', async () => {

        render(
            <MemoryRouter initialEntries={['/request']}>
                <Routes>
                    <Route path='request' element={<Request/>}/>
                </Routes>
            </MemoryRouter>
        )

        const beforeLoadData = screen.getByText('Нет данных')
        expect(beforeLoadData).toBeInTheDocument()
        await waitFor(() => {
            const afterLoadData = screen.getByText('johny')
            expect(afterLoadData).toBeInTheDocument()
        })

        expect(fetch).toBeCalledTimes(1)
    })
})