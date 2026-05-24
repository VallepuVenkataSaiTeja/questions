import { useSearchParams } from "react-router-dom";

function Profile(){
    const [searchParams] = useSearchParams();
    const profile = searchParams.get('name')
    return (
       <div>
         <h1>Profile</h1>
         <p>Name: {profile}</p>
       </div>
    )
}
export default Profile;