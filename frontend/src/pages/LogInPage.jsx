import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../utils/logInFunctions";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userReducer";


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
            const response = await logIn(formData);
            const data = await response.json();
            console.log(data)
            alert(data.message);
            console.log(data.data);
            dispatch(setUser(data.data));
            if(response.status == 200){
                dispatch({ type: 'logIn' });

                console.log("fetching data")
                            
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/data`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include"
                })
                const data = await response.json();
                console.log(data);
    
                // dispatch(setUser(data));
                

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
                                
                                <label htmlFor="username">Username :</label>
                                <label htmlFor="password">Password :</label>
                                
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                                <input className="border-2 border-black rounded-2xl bg-[#333333] px-[20px]" type="text" id="password" name="password" value={formData.password} onChange={handleChange}/>

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