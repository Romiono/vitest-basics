import App from "../App.tsx";

export const Routs = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'counter',
                element: <div>counter</div>
            },
            {
                path: 'counter-with-hook',
                element: <div>counter-with-hook</div>
            },
            {
                path: 'request',
                element: <div>request</div>
            },
        ]
    },
]