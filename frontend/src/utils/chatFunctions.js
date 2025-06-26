export const getList = async () => {
    try{
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/message/list`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
            credentials : 'include'
        })
        console.log("req sent");
        const response = await res.json();
        const list = response.data;
        console.log("received",list);

        return list;
    }

    catch(err){
        console.log(err);
    }
}

export const getMessage = async (rid) => {
    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/message/get`,
            {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                credentials : 'include',
                body : JSON.stringify({ rid })
            }
        )

        const res = await response.json();

        return res.data;
    }

    catch(err){
        console.log(err);
    }
}

export const sendMessage = async (text,rid) => {
    try{
        console.log(text,rid);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/message/send`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
            body : JSON.stringify(
                {
                    rid : rid,
                    msg : text
                })
        })

        const data = await response.json();
        console.log(data);
    }

    catch(err){
        console.log(err);
    }
}