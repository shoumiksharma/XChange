import { useEffect, useState } from "react";
import { fetchUser } from "../utils/fetchUser";
import useGetUser from "../hooks/useGetUser";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userReducer";
import ImageUpload from "../components/ImageUpload";
import ToggleButton from "../components/toggleButton";

function Profile(){
    const[editing, setEditiing] = useState(false);
    // const [user, setUser] = useState({})
    
    const dispatch = useDispatch();

    const handleSubmit = () => {
        updateUser(formData);
        setEditiing(false);
    }

    const user = useSelector((state) => state.user);
    const [formData, setFormData] = useState()
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const updateUser = async () => {

        try{
            dispatch(setUser(formData));
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/update`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                credentials : 'include',
                body : JSON.stringify({
                    name: `${formData.name}`,
                    hostel: `${formData.hostel}`,
                    type: `${formData.type}`,
                    room_no: `${formData.room}`
                })
            })
                
            if(response.status != 200){
                console.log("Error. Try again !");
            }
        }
    
        catch(err){
            console.log("Error : ",err);
        }
    }

    useEffect(() => {
        if(user){
            setFormData(user);
        }
    },[user]);

    return (
        <>

            <div className='bg-[#19191b] min-h-screen flex flex-col items-center font-moderna text-white 2xl:text z-0 pb-[40px]'>
                <div className="bg-black border-2 border-green-400 w-[95vw] rounded-4xl flex flex-col items-center mt-[100px] md:mt-[200px] 2xl:mt-[250px] relative pb-[40px] 2xl:text-[40px] md:text-[30px]">
                    <div className="bg-[#19191b] rounded-full h-[150px] w-[150px] md:h-[270px] md:w-[270px] 2xl:h-[300px] 2xl:w-[300px] border-green-400 border-2 -translate-y-[65%] overflow-hidden absolute">
                        <img src={user.gender === 'm' ? 'teen.png' : 'teen (1).png'} alt="" className="scale-107 relative -bottom-3"/>
                    </div>

                    {editing && (
                        <button onClick={() => setEditiing(false)} className="h-[40px] w-[40px] absolute left-[2%] top-[7%] md:w-[70px]"><img src="back.png" alt="" /></button>
                    )}

                    {!editing && (<div className="rounded-2xl h-[40px] w-[40px] absolute right-[2%] top-[7%] md:w-[70px]">
                        <button onClick={() => setEditiing(true)}><img src="pen.png" alt="" /></button>
                    </div>)}

                    <div className="flex items-center justify-center 2xl:mt-[150px] md:mt-[140px] mt-[70px]">
                    <div className="2xl:text-[40px] flex flex-col items-center md:items-start gap-[100px]">

                        <form action="" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-x-[40px] md:gap-x-[100px] md:gap-y-[20px] mb-[40px]">
                                <label htmlFor="name">Name : </label>
                                <label htmlFor="hostel">Hostel : </label>
                                <label htmlFor="room">Room : </label>
                                <label htmlFor="type">Room Type : </label>
                    
                                {!editing && <div>{user.name}</div>}
                                {!editing && <div>{user.hostel}</div>}
                                {!editing && <div>{user.room}</div>}
                                {!editing && <div>{user.type}</div>}
                                
                                {editing && <input value={formData.name} name="name" onChange={handleInputChange} type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                {editing && <input value={formData.hostel} name="hostel" onChange={handleInputChange} type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                {editing && <input value={formData.room} name="room" onChange={handleInputChange} type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                {editing && <input value={formData.type} name="type" onChange={handleInputChange} type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                
                            </div>
                            {editing && (<div className="flex justify-center">
                                <button type="submit" className="bg-blue-500 hover:bg-sky-700 text-white px-[1vw] py-[0.5vh] rounded-full mr-2">Submit</button>
                            </div>)}
                        </form>
                    </div>
                    
                    {!editing && 
                    <div className="">
                        <ImageUpload />
                        <div className="flex justify-center items-center gap-[7px]">
                            <ToggleButton />
                             - Your room is {!user.room_hosted && <>not</>} hosted
                        </div>
                    </div>
                    }
                    </div>
                
                </div>
            </div>

        </>
    )
}

export default Profile;