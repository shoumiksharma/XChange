export const fetchUser = async () => {
    try{
        const user = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include'
        });

        if(user.status == 401){
            console.log("Unauthorised access !");
        }
        
        return await user.json();
    }

    catch(err){
        console.log("Error : ",err);
    }
}