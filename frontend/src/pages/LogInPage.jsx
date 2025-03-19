import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../utils/logInFunctions";
import { useDispatch, useSelector } from "react-redux";


function LogIn(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
            // console.log(formData);
            const response = await logIn(formData);  // Send the form data to backend
            const data = await response.json();
            console.log(data)
            alert(data.message);
            if(response.status == 200){
                dispatch({ type: 'logIn' });
                navigate('/');
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
                    <div>
                        <img className="" src="worker (1).png" alt="" />
                    </div>
                    <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-[70px] p-[7px]">
                        <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-x-[40px] md:gap-x-[100px] md:gap-y-[20px]">
                                {/* <label htmlFor="name">Name :</label>
                                <label htmlFor="gender">Gender :</label> */}
                                <label htmlFor="username">Username :</label>
                                <label htmlFor="password">Password :</label>
                                {/* <label htmlFor="re-enter-password">Confirm Password :</label> */}
                                {/* <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="name"/> */}
                                {/* <div className="flex justify-evenly">
                                    <div className="flex items-center gap-[20px]">
                                        <input className="hidden peer" type="radio" name="gender" id="m" />
                                        <span className="w-6 h-6 rounded-full peer-checked:bg-blue-500 flex items-center justify-center"></span>
                                        <label className="bg-[#333333] border-2 border-black w-[100px] text-center rounded-2xl" htmlFor="m">M</label>
                                    </div>
                                    <div className="flex items-center gap-[20px]">
                                        <input className="hidden peer" type="radio" name="gender" id="f" />
                                        <span className="w-6 h-6 rounded-full peer-checked:bg-blue-500 flex items-center justify-center"></span>
                                        <label className="bg-[#333333] border-2 border-black w-[100px] text-center rounded-2xl" htmlFor="f">F</label>
                                    </div>
                                </div> */}
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="password" name="password" value={formData.password} onChange={handleChange}/>
                                {/* <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="re-enter-password"/> */}
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-sky-700 text-white px-[1vw] py-[0.5vh] rounded-full mr-2">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default LogIn;