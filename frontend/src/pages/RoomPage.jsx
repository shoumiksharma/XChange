import { useEffect, useState } from "react";
import { fetchUser } from "../utils/fetchUser";
import ToggleButton from "../components/toggleButton";
import ImageUpload from "../components/ImageUpload";
import { useDispatch, useSelector } from "react-redux";

function Profile(){
    const [user, setUser] = useState({
        hostel: '',
        room_no: '',
        type: '',
        hosted: '',
        photo: ''
    })

    const hosted = useSelector((state) => state.room.isRoomHosted);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {

            const userData = await fetchUser();
            const u = userData.user;
            console.log(userData);
    
            if (userData) {
                setUser({
                    hostel: u.hostel,
                    room_no: u.room_no,
                    type: u.type,
                    hosted: u.room_hosted,
                    photo: u.photo
                })
                
                if(u.room_hosted){
                    dispatch({type : 'hosted'});
                }
                else{
                    dispatch({type : 'notHosted'});
                }

                if(u.photo){
                    dispatch({type : 'uploaded'});
                }
                else{
                    dispatch({type : 'notUploaded'});
                }
            }
            else{
                console.log("Error in fetching details");
            }

        }

        fetchUserData();
    }, [] );

    return (
        <>

            <div className='bg-[#19191b] min-h-screen flex flex-col items-center font-moderna text-white pb-[40px]'>
                <div className="bg-black border-2 border-green-400 w-[95vw] rounded-4xl flex flex-col items-center pb-[40px] text-[20px] md:text-[35px]">

                    <div className="2xl:mt-[150px] md:mt-[140px] mt-[70px] flex justify-around md:flex-row flex-col items-center w-[80vw] gap-[40px] md:gap-[100px]">

                            <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-[80px] md:gap-x-[7vw] md:gap-y-[20px]">
                                
                                <label htmlFor="hostel">Hostel: </label>
                                <label htmlFor="room">Room: </label>
                                <label htmlFor="type">Room Type: </label>
                    
                                <div>{user.hostel}</div>
                                <div>{user.room_no}</div>
                                <div>{user.type}</div>
                                
                            </div>
                        
                            <ImageUpload />
                    </div>

                    <div className="flex justify-center gap-[14px] items-center w-[95vw] text-[#333333] mt-[20px]">
                        <ToggleButton />
                         - Your room is {!hosted && <>not</>} hosted
                    </div>
                
                </div>
            </div>

        </>
    )
}

export default Profile;