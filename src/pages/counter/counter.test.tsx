import {describe, it, expect, beforeAll} from "vitest";
import {render, renderHook, screen, act} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router";
import userEvent from "@testing-library/user-event";
import Counter from "./counter.tsx";
import "@testing-library/jest-dom/vitest";
import {useCounter} from "./hooks/useCounter.tsx";




describe('counter page', () => {
    beforeAll(() => {
        render(
            <MemoryRouter initialEntries={['/counter']}>
                <Routes>
                    <Route path="counter" element={<Counter/>}/>
                </Routes>
            </MemoryRouter>
        );
    })
    it('test initial value', () => {
        expect(screen.getByText('0')).toBeInTheDocument()
    });
    it('test increment', async () => {
        expect(screen.getByText('0')).toBeInTheDocument()
        const button = screen.getByRole('button', { name: /0/i });
        await userEvent.click(button);
        expect(screen.getByText('1')).toBeInTheDocument()
    });
    it('full useCounter test', ()=> {
        const { result } = renderHook(() => useCounter(0))
        expect(result.current.counter).toEqual(0)
        act(() => {
          result.current.increment()
        })
        expect(result.current.counter).toEqual(1)
        act(() => {
            result.current.decrement()
        })
        expect(result.current.counter).toEqual(0)
        act(() => {
            result.current.increaseBy(30)
        })
        expect(result.current.counter).toEqual(30)
        act(() => {
            result.current.decreaseBy(30)
        })
        expect(result.current.counter).toEqual(0)
    })
    it('example input test', async () => {
        const user = userEvent.setup()
        const input = screen.getByLabelText('value')
        const button = screen.getByRole('button', { name: /increaseBy/i })
        const counter = screen.getByText('Counter with hook: 0')
        expect(input).toHaveValue(0)
        await user.type(input, '123')
        expect(input).toHaveValue(123)
        await user.click(button)
        expect(counter).toHaveTextContent('Counter with hook: 123')

    })
})