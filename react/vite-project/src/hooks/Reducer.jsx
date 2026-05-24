import { useReducer } from "react";

function reducer(state, action){
   switch(action.type){
    case "INCREMENT" : {
        return state + action.payload
    }
    case "DECREMENT" : {
        return state - action.payload
    }
    case "RESET" : {
        return 0
    }
    default : return state
   }
}

function Reducer(){

    let initialState = 0;
    const [state , dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Reducer</h1>
            <p>Count: {state} </p>

            <button onClick={()=>dispatch({type: 'INCREMENT', payload : 1})}>Increment</button>
            <button onClick={()=>dispatch({type: 'DECREMENT', payload : 1})}>Decrement</button>
            <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
        </div>
    )
}
export default Reducer;