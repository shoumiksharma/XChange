export const searchRooms = async (hostel) => {
    try{
        
        console.log(hostel);
        const rooms = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/room/search`, {
            method : "POST",
            headers : {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({hostel})
        });

        // const data = await rooms.json();

        return rooms;
    }
    catch(err){
        console.log("Error : ",err);
    }
}