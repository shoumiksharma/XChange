import { useEffect, useState } from "react";
import { searchRooms } from "../utils/searchRooms";
import RoomCard from "../components/RoomCard";
import { useNavigate } from "react-router-dom";

function AvailableRooms(){
    const navigate = useNavigate();
    const [hostel, setHostel] = useState('all');
    const [rooms, setRooms] = useState([]);
    
    useEffect( () => {

        const fetchRooms = async () => {
            const data = await searchRooms(hostel);
            if(data.status != 200){
                navigate('/log-in');
            }
            else{
                const arr = await data.json();
                setRooms(arr.avail_rooms);
                // console.log(arr);
            }
            // console.log(data);
        }
        fetchRooms();
    }, [hostel]);

    const handleChange = (e) => {
        setHostel(e.target.value);
    }
    return (
        <>
            <div className='bg-[#19191b] min-h-screen flex flex-col items-center gap-[5vh] font-moderna text-white'>

                    <div className="flex justify-center md:justify-end w-[85vw] text-[20px]">
                        <form action="">
                            <label htmlFor="filter">Filter by hostel : </label>

                            <label htmlFor="hostel"></label>
                            <select className="bg-black w-[70px] rounded-2xl text-center" onChange={handleChange} name="number" id="">
                                <option value="all">All</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </form>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-[20px] w-[95vw]">

                    {rooms.map( (room) => {
                        return <RoomCard key={room._id} owner={room.name} room_no={room.room_no} hostel={room.hostel} id={room._id}/>
                    } )}

        
                </div>
                {rooms.length == 0 && <>
                <div>No rooms available with the given filters</div>
                </>}
            </div>

        </>
    )
}

export default AvailableRooms;
