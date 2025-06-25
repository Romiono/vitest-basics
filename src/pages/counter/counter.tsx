import {useState} from "react";
import classes from "./styles.module.css"
import {useCounter} from "./hooks/useCounter.tsx";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const { counter: hookedCounter, increment, decrement, increaseBy, decreaseBy } = useCounter(0)
    return (
        <div className={classes.container}>
            <div className={classes.block}>
                <h3>Counter</h3>
                <button onClick={() => setCounter(prev => prev + 1)}>{counter}</button>
            </div>
            <div className={classes.block}>
                <h3>Counter with hook: {hookedCounter}</h3>
                <div className={classes.block}>
                    <button onClick={increment}>increment</button>
                    <button onClick={decrement}>decrement</button>
                    <div>
                        <input
                            type='number'
                            value={value}
                            onChange={(e) => setValue(+e.target.value)}
                            aria-label='value'
                        />
                    </div>
                    <button onClick={() => increaseBy(value)}>increaseBy</button>
                    <button onClick={() => decreaseBy(value)}>decreaseBy</button>
                </div>
            </div>
            </div>
    );
};

export default Counter;