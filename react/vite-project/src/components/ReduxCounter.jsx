import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../store/counterSlice";

function ReduxCounter(){
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Redux Counter</h1>
            <p>Count: {count}</p>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
        </div>
    )
}
export default ReduxCounter;