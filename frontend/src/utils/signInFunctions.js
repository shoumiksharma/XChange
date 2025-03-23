export const signIn = async (formData) => {
    try {
        console.log("form data");
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        return response;
    }
    catch (error) {
        console.error('Error : ', error);
    }
}