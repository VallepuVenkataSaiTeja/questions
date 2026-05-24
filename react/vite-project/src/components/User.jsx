import { useParams } from "react-router-dom";

function User(){
    const {id} = useParams()
    return(
        <div>
            <h1>User Component</h1>
            <p>User: {id}</p>
        </div>
    )
}
export default User;