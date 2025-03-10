import { useState } from "react";
import Navbar from "../components/Navbar";

function Profile(){
    const[editing, setEditiing] = useState(false);
    return (
        <>

            <div className='bg-[#19191b] min-h-screen flex flex-col items-center font-moderna text-white 2xl:text z-0 pb-[40px]'>
                {/* <Navbar />   */}
                <div className="bg-black border-2 border-green-400 w-[95vw] rounded-4xl flex flex-col items-center mt-[100px] md:mt-[200px] 2xl:mt-[250px] relative pb-[40px] 2xl:text-[40px] md:text-[30px]">
                    <div className="bg-[#19191b] rounded-full h-[150px] w-[150px] md:h-[270px] md:w-[270px] 2xl:h-[300px] 2xl:w-[300px] border-green-400 border-2 -translate-y-[65%] overflow-hidden absolute">
                        <img src="teen.png" alt="" className="scale-107 relative -bottom-3"/>
                    </div>

                    {editing && (
                        <button onClick={() => setEditiing(false)} className="h-[40px] w-[40px] absolute left-[2%] top-[7%] md:w-[70px]"><img src="back.png" alt="" /></button>
                    )}

                    {!editing && (<div className="rounded-2xl h-[40px] w-[40px] absolute right-[2%] top-[7%] md:w-[70px]">
                        <button onClick={() => setEditiing(true)}><img src="pen.png" alt="" /></button>
                    </div>)}

                    <div className="2xl:mt-[150px] 2xl:text-[40px] md:mt-[140px] mt-[70px] flex justify-items-start w-[80vw] gap-[100px]">

                        <form action="" className="mb-[40px]">
                            <div className="grid grid-cols-2 grid-rows-5 grid-flow-col gap-x-[40px] md:gap-x-[100px] md:gap-y-[20px]">
                                <label htmlFor="name">Name : </label>
                                <label htmlFor="hostel">Hostel : </label>
                                <label htmlFor="room">Room : </label>
                                <label htmlFor="type">Room Type : </label>
                                <label htmlFor="email">Email ID : </label>
                    
                                {!editing && <div>jnjkn</div>}
                                {!editing && <div>jnjkn</div>}
                                {!editing && <div>jnjkn</div>}
                                {!editing && <div>jnjkn</div>}
                                {!editing && <div>jnjkn</div>}
                                
                                {editing && <input type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                {editing && <input type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                {editing && <input type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                {editing && <input type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                {editing && <input type="text" className="rounded-full bg-[#333333] pl-[40px]"/>}
                                
                            </div>
                        </form>
                    </div>
                    
                    
                    {editing && (<div>
                        <button onClick={() => setEditiing(false)} className="bg-blue-500 hover:bg-sky-700 text-white px-[1vw] py-[0.5vh] rounded-full mr-2">Submit</button>
                    </div>)}
                
                </div>
            </div>

        </>
    )
}

export default Profile;