import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: "increment" });
    };
    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    };
    const incrementBy2Handler = () => {
        dispatch({ type: "incrementBy2" });
    };
    const decrementBy2Handler = () => {
        dispatch({ type: "decrementBy2" });
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={incrementBy2Handler}>Increment By 2</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={decrementBy2Handler}>Decrement By 2</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;