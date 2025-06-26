import { useNavigate } from "react-router-dom";
import useRoomImage from "../hooks/useRoomImage";

function RoomCard ({owner, room_no, hostel, id}) {
    const navigate = useNavigate();
    const imgURL = useRoomImage(id);

    return(
        <>

            <div className="p-[7px] bg-green-700 rounded-2xl flex flex-col justify-center items-center h-[400px]">
                <div className=" rounded-2xl mb-[7px] h-[80%] flex justify-center items-center">
                    <img src={imgURL} alt="No image" className="h-[100%] rounded-2xl" />
                </div>
                <div className="flex justify-center items-center w-[100%]">
                    <div className="flex flex-col items-start w-[80%]">
                        <div>Room Owner : {owner}</div>
                        <div>Room No. : {room_no}</div>
                        <div>Hostel : {hostel}</div>
                    </div>
                    <button className="bg-blue-700 rounded-2xl h-[44px] w-[140px]" onClick={() => navigate('/chats', { state: { rid: id, name: owner } })}>Chat & Swap</button>
                </div>
            </div>
            
        </>
    )
}

export default RoomCard;