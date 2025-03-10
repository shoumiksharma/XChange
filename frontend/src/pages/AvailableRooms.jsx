import { useState } from "react";
import Navbar from "../components/Navbar";

function AvailableRooms(){

    return (
        <>
            <div className='bg-[#19191b] min-h-screen flex flex-col items-center gap-[5vh] font-moderna text-white'>
                {/* <Navbar /> */}

                    <div className="flex justify-end w-[85vw] text-[20px]">
                        <form action="">
                            <input className="h-[20px] w-[20px] mr-[7px]" type="checkbox" name="" id="" value={"yes"}/>
                            <label htmlFor="filter">Filter by hostel : </label>

                            <label htmlFor="hostel"></label>
                            <select className="bg-black w-[70px] rounded-2xl text-center" name="number" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </form>
                    </div>

                <div className="grid grid-cols-3 gap-4 p-[20px]">
                    <div className="p-[14px] bg-green-400 rounded-2xl flex flex-col justify-center items-center">
                        <div className="w-[30vw] h-[30vh] bg-green-700 rounded-2xl"></div>
                        <div className="flex w-[100%] p-[7px]">
                            <div className="flex flex-col items-start w-[80%]">
                                <div>Room Owner : XXXXXX</div>
                                <div>Room No. : XXX</div>
                                <div>Hostel : XX</div>
                            </div>
                            <button className="bg-blue-700 rounded-2xl">Request Swap</button>
                        </div>
                    </div>
                    <div className="p-[14px] bg-green-400 rounded-2xl flex flex-col justify-center items-center">
                        <div className="w-[30vw] h-[30vh] bg-green-700 rounded-2xl"></div>
                        <div className="flex w-[100%] p-[7px]">
                            <div className="flex flex-col items-start w-[80%]">
                                <div>Room Owner : XXXXXX</div>
                                <div>Room No. : XXX</div>
                                <div>Hostel : XX</div>
                            </div>
                            <button className="bg-blue-700 rounded-2xl">Request Swap</button>
                        </div>
                    </div>
                    <div className="p-[14px] bg-green-400 rounded-2xl flex flex-col justify-center items-center">
                        <div className="w-[30vw] h-[30vh] bg-green-700 rounded-2xl"></div>
                        <div className="flex w-[100%] p-[7px]">
                            <div className="flex flex-col items-start w-[80%]">
                                <div>Room Owner : XXXXXX</div>
                                <div>Room No. : XXX</div>
                                <div>Hostel : XX</div>
                            </div>
                            <button className="bg-blue-700 rounded-2xl">Request Swap</button>
                        </div>
                    </div>
                    <div className="p-[14px] bg-green-400 rounded-2xl flex flex-col justify-center items-center">
                        <div className="w-[30vw] h-[30vh] bg-green-700 rounded-2xl"></div>
                        <div className="flex w-[100%] p-[7px]">
                            <div className="flex flex-col items-start w-[80%]">
                                <div>Room Owner : XXXXXX</div>
                                <div>Room No. : XXX</div>
                                <div>Hostel : XX</div>
                            </div>
                            <button className="bg-blue-700 rounded-2xl">Request Swap</button>
                        </div>
                    </div>
                    <div className="p-[14px] bg-green-400 rounded-2xl flex flex-col justify-center items-center">
                        <div className="w-[30vw] h-[30vh] bg-green-700 rounded-2xl"></div>
                        <div className="flex w-[100%] p-[7px]">
                            <div className="flex flex-col items-start w-[80%]">
                                <div>Room Owner : XXXXXX</div>
                                <div>Room No. : XXX</div>
                                <div>Hostel : XX</div>
                            </div>
                            <button className="bg-blue-700 rounded-2xl">Request Swap</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AvailableRooms;
