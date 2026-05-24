import { useRef } from "react";

const Ref = () => {
    let ref = useRef();
    let count = useRef(0)
    function handleClick(){
        ref.current.focus()
    }
    function increase(){
        count.current += 1
        console.log(count.current)
    }
    return (
        <div>
            <h1>Ref</h1>
            <input type="text" ref={ref} />
            <button onClick={handleClick}>focus input</button>

            <p>Count: {count.current}</p>
            <button onClick={increase}>Increase</button>
        </div>
    )
}
export default Ref;