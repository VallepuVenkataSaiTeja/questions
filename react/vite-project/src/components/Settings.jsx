import useFetch from "../customHooks/useFetch";

function Settings(){
    const {data} = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            <h1>Settings</h1>
            <ul>
                {
                    data.map(user => (
                        <li>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Settings;