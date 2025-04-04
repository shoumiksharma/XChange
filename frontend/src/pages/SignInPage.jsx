import { useState } from "react";
import { signIn } from "../utils/signInFunctions";
import { useNavigate } from "react-router-dom";

function SignIn(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        hostel: '',
        type: '',
        room_no: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await signIn(formData);
            const data = await response.json();
            alert(data.message);
            if(response.status == 200){
                navigate('/log-in');
            }
        } 
        catch (error) {
            alert("Error occured. Try again !");
        }
    };
      
    return(
        <>
            <div className='bg-[#19191b] flex flex-col items-center gap-[5vh] font-moderna text-white text-[2vw]'>
                <div className="border-2 border-black flex justify-around items-center w-[95vw] rounded-2xl p-[20px]">
                    <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-[70px] p-[7px]">
                        <div className="grid grid-cols-2 grid-rows-8 grid-flow-col gap-x-[40px] md:gap-x-[100px] md:gap-y-[20px]">
                                <label htmlFor="name">Name :</label>
                                <label htmlFor="gender">Gender :</label>
                                <label htmlFor="username">Username :</label>
                                <label htmlFor="password">Password :</label>
                                <label htmlFor="re-enter-password">Confirm Password :</label>
                                <label htmlFor="re-enter-password">Hostel : </label>
                                <label htmlFor="re-enter-password">Room No. : </label>
                                <label htmlFor="re-enter-password">Room Type : </label>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                                <div className="flex justify-evenly">
                                    <div className="flex items-center gap-[20px]">
                                        <input className="hidden peer" type="radio" name="gender" id="m" value="m" checked={formData.gender === 'm'} onChange={handleChange}/>
                                        <span className="w-6 h-6 rounded-full peer-checked:bg-blue-500 flex items-center justify-center"></span>
                                        <label className="bg-[#333333] border-2 border-black w-[100px] text-center rounded-2xl" htmlFor="m">M</label>
                                    </div>
                                    <div className="flex items-center gap-[20px]">
                                        <input className="hidden peer" type="radio" name="gender" id="f" value="f" checked={formData.gender === 'f'} onChange={handleChange}/>
                                        <span className="w-6 h-6 rounded-full peer-checked:bg-blue-500 flex items-center justify-center"></span>
                                        <label className="bg-[#333333] border-2 border-black w-[100px] text-center rounded-2xl" htmlFor="f">F</label>
                                    </div>
                                </div>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="password" name="password" value={formData.password} onChange={handleChange}/>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="re-enter-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="hostel" name="hostel" value={formData.hostel} onChange={handleChange}/>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="room_no" name="room_no" value={formData.room_no} onChange={handleChange}/>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="type" name="type" value={formData.type} onChange={handleChange}/>
                        </div>
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-[1vw] py-[0.5vh] rounded-full">
                            Sign Up
                        </button>
                    </form>

                    <div>
                        <img className="" src="worker.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default SignIn;