import stateHook from "../customHooks/useState";

function About(){
    const {count , increment, decrement} = stateHook()
    return (
        <div>
            <h1>About Component</h1>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default About;