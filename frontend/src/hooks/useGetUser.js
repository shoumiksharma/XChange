import { useEffect, useState } from "react";

const useGetUser = () => {
    const [user, setUser] = useState();
    useEffect( () => {

        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(";").shift();
            return null;
        };

        const userData = getCookie("user_data");
        
        try{
            const decodedCookie = decodeURIComponent(userData);
            const user_data = JSON.parse(decodedCookie);
            setUser(user_data);
        }
        catch(err){
            console.log("Error : ",err);
        }
    }, []);
    
    return user;
}

export default useGetUser;