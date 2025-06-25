import {useState} from "react";

export const useCounter = (initialValue: number) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => setCounter(prev => prev + 1);

    const decrement = () => setCounter(prev => prev - 1);

    const increaseBy = (value: number) => setCounter(prev => prev + value);

    const decreaseBy = (value: number) => setCounter(prev => prev - value);

    return { counter, increment, decrement, increaseBy, decreaseBy };
}