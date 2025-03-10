import Navbar from "../components/Navbar"
import useAOS from "../hooks/useAOS"

function Home(){

    useAOS();

    return (
        <>
            <div className='bg-[#19191b] min-h-screen flex flex-col items-center gap-[5vh] font-moderna text-white'>
                {/* <Navbar /> */}
                <div className=" w-[95vw] rounded-4xl text-center py-[2vh] text-[3vw] bg-clip-text text-transparent bg-gradient-to-br from-[#15ff5b] to-[#217af6]">Welcome to XChange ! <br /> NIT Kurukshetra's room exchange platform
                </div>

                <div className="bg-black w-[95vw] flex items-center justify-around rounded-4xl">
                    <img src="hi.png" className="w-[30vw]" alt="" />
                    <div className="sm:h-[11vh] 2xl:h-[30vh] h-[100px] w-[0.1vw] bg-[#383838]"></div>
                    <div className="text-[3vw] text-center">Hi there! <br /> Looking for a Change of Space? <br /> Swap Your Hostel Room Today!</div>
                </div>

                <div className="bg-black w-[95vw] flex items-center justify-around rounded-4xl">
                    <div className="text-[3vw] text-center">Why Swap your room? <br />
                        <div className="flex justify-center items-center mt-[7px] sm:mt-[4vh] 2xl:mt-[7vh]" data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Move closer to your classes
                        </div>
                        <div className="flex justify-center items-center" data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Find a quieter space for studying
                        </div>
                        <div className="flex justify-center items-center" data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Change the view
                        </div>
                        <div className="flex justify-center items-center" data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Reunite with friends !
                        </div>
                    </div>
                    <div className="sm:h-[11vh] 2xl:h-[30vh] h-[100px] w-[0.1vw] bg-[#383838]"></div>
                    <img src="question.png" className="w-[30vw]" alt="" />
                </div>

                <div className="bg-black w-[95vw] flex items-center justify-around rounded-4xl mb-[4vh]">
                    <img src="working.png" className="w-[30vw]" alt="" />
                    <div className="sm:h-[11vh] 2xl:h-[30vh] h-[100px] w-[0.1vw] bg-[#383838]"></div>
                    <div className="text-[3vw] text-center">How RoomSwap Works? <br />
                        <div className="flex justify-center items-center mt-[7px] sm:mt-[4vh] 2xl:mt-[7vh]" data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Sign Up and Set Up Your Profile
                        </div>
                        <div className="flex justify-center items-center" data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Browse Available Rooms
                        </div>
                        <div className="flex justify-center items-center"data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Send a Swap Request
                        </div>
                        <div className="flex justify-center items-center" data-aos='fade-up' data-aos-offset='30vh'>
                            <img src="point.png" className="sm:h-[4vh] 2xl:h-[7vh] h-[30px]" alt="" />Confirm the Swap !
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home