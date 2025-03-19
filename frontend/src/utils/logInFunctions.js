export const logIn = async (formData) => {
    try {
        console.log("form data");
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/logIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        });

        return response;
    }
    catch (error) {
        console.error('Error : ', error);
    }
}

export const logOut = async () => {
    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/logOut`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials : 'include',
        })
        const data = await response.json();
        console.log(data.message);
    }

    catch(err){
        console.log("Error : ",err);
    }
}