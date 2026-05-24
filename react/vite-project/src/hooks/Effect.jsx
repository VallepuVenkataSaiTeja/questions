import { useEffect, useState } from "react"

function Effect(){

    const [users, setUsers] = useState([]);
    async function fetchUsers(){
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        // console.log(data);

         setUsers(data);
    }

    useEffect(()=>{
       fetchUsers();
    },[])

    useEffect(() => {
    console.log(users);
}, [users]);

    return (
        <div>
            <h1>useEffect</h1>
            <ul>
                {
                    users.map(user =>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Effect;