function HostelReview(){
    return(
        <>
            <div className='bg-[#19191b] min-h-screen flex flex-col items-center gap-[5vh] font-moderna text-white'>
                <div className="flex justify-end w-[85vw] text-[20px]">
                    <form action="">
                        <input className="h-[20px] w-[20px] mr-[7px]" type="checkbox" value={"yes"}/>
                        <label htmlFor="filter">Filter by hostel : </label>
                        <select className="bg-black w-[70px] rounded-2xl text-center" name="hostel" id="hostel">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                        </select>
                    </form>
                </div>

                <div>
                    This feature is under develpoment
                </div>
                <div className="bg-black w-[95vw] p-[20px] rounded-2xl text-[20px]">
                    <div>By : Lorem. , 20/20/20</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate minima, numquam dolore modi, aut accusamus sunt sapiente blanditiis totam magnam id dolores cum mollitia atque pariatur eligendi iste officia nostrum ducimus repudiandae cumque quasi harum. Perferendis sit enim numquam.</div>
                </div>
                <div className="bg-black w-[95vw] p-[20px] rounded-2xl text-[20px]">
                    <div>By : Lorem. , 20/20/20</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate minima, numquam dolore modi, aut accusamus sunt sapiente blanditiis totam magnam id dolores cum mollitia atque pariatur eligendi iste officia nostrum ducimus repudiandae cumque quasi harum. Perferendis sit enim numquam.</div>
                </div>
                <div className="bg-black w-[95vw] p-[20px] rounded-2xl text-[20px]">
                    <div>By : Lorem. , 20/20/20</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate minima, numquam dolore modi, aut accusamus sunt sapiente blanditiis totam magnam id dolores cum mollitia atque pariatur eligendi iste officia nostrum ducimus repudiandae cumque quasi harum. Perferendis sit enim numquam.</div>
                </div>
                <div className="bg-black w-[95vw] p-[20px] rounded-2xl text-[20px]">
                    <div>By : Lorem. , 20/20/20</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate minima, numquam dolore modi, aut accusamus sunt sapiente blanditiis totam magnam id dolores cum mollitia atque pariatur eligendi iste officia nostrum ducimus repudiandae cumque quasi harum. Perferendis sit enim numquam.</div>
                </div>
            </div>.
        </>
    )
}
export default HostelReview;