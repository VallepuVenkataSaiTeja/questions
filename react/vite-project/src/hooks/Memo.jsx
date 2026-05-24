import { useMemo, useState } from "react";

function Memo(){
    const [count, setCount] = useState(0)

    function sum(){
      console.log('running heavy calculation');
      let result = 0;
      for(let i =0; i<= 100000000; i++){
        result+= i
      }
      return result;
    }

    const total = useMemo(()=>{
        return sum()
    },[])
    console.log(total)

    return (
        <div>
            <h1>Memo</h1>
            <p>{total}</p>
            <hr />
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>increase</button>
        </div>
    )
}
export default Memo;