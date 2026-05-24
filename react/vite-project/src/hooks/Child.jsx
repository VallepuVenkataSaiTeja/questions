import { useContext } from "react";
import { UserContext } from "./Context";

function Child(){
    const {user, count, increase} = useContext(UserContext)
    return (
        <div>
             <p>{user.name}</p>
             <p>{count}</p>
             <button onClick={increase}>increase</button>
        </div>
    )
}
export default Child;