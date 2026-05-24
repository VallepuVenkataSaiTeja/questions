import { memo, useCallback, useState } from "react";

function Callback(){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const learning = useCallback(() =>{

    },[num])
    return (
        <div>
            <h1>Callback</h1>
            <p>count: {count}</p>
            <button onClick={() =>setCount(count+1)}>increase</button>

            <br />
            <Child learning={learning} num={num} />
            <p>Num: {num}</p>
            <button onClick={()=> setNum(num+1)}>inc</button>
        </div>
    )
}
export default Callback;

const Child = memo(function Child({learning, num}){
    console.log('child rendered')
    return (
        <div>
            Child component
        </div>
    )
})