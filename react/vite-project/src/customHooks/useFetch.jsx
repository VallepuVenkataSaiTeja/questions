import { useEffect, useState } from "react";

function useFetch(url){

    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchUsers(){
           const res = await fetch(url);
           const users = await res.json();
            setData(users)
        }
        fetchUsers()
    },[url])

    return {data};
}
export default useFetch;