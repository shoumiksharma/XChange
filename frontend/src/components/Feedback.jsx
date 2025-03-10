function Feedback({closeFeedback}){
    return(
        <>
        <div className="min-h-screen w-screen fixed flex justify-center items-center bg-transparent backdrop-blur-md z-40">
            <div className="text-[40px] flex flex-col items-center border-4 border-black p-[40px] bg-[#19191b] rounded-2xl relative">
                <button className="absolute right-[10%]">X</button>
                Write to us !


                <div className="mb-[40px] mt-[20px]">
                    <form className="flex flex-col gap-[20px] items-center" action="">
                        <textarea name="feedback" id="" className="overflow-auto resize-none bg-black rounded-2xl p-[20px] text-[20px] w-[700px] h-[300px]"></textarea>
                        <button onClick={closeFeedback} className="bg-blue-500 hover:bg-sky-700 rounded-full w-[200px]">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Feedback;