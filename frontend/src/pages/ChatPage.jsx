import { useEffect, useRef } from "react";
import { getList, getMessage, sendMessage } from "../utils/chatFunctions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function ChatPage() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [rid, setRid] = useState("");
    const [msg, setMsg] = useState([]);
    const [text, setText] = useState("");
    const [load, setLoad] = useState(false);
    const bottom = useRef(null);
    const socket = useSelector((state) => state.socket.socket);
    const user = useSelector((state) => state.user);
    const [name, setName] = useState("");
    const location = useLocation();
    
    useEffect(() => {
        const fetch = async () => {
            try {
                // const list = await getList();
                // setList(list);
                if (rid.length != 0) {
                    const data = await getMessage(rid);
                    setMsg(Array.isArray(data) ? data : []);
                }
            }
            catch (err) {
                console.log(err);
            }

        }
        fetch();


        console.log(user.userId,"userid");
        if (socket) {
            if(rid != ""){
                socket.emit("join", rid);
                console.log("joining");
            }

            socket.on("receiveMsg", (data) => {
                if(data.from === rid || data.rid === rid){
                    setMsg((prev) => [...prev, data]);
                    // console.log("message",data.message);
                }
                // console.log(data,"updated");
                if(!list.some(item => (item._id === data.from || item._id != user.userId))){
                    // console.log(user.userId,"userId");
                    // console.log(data.from,"list",user.userId);
                    setList((prev) => [...prev, data.from]);
                }
            })
        }
        setLoad(false);

        return () => {
            if (socket) {
                socket.off("receiveMsg");
            }
        }

    }, [rid])


    useEffect(() => {
        const fetch = async () => {
            try{
                console.log("fetching list");
                const list = await getList();
                setList(list);
                
                console.log(list+"here");
            }
            catch(err){
                console.log(err);
            }
        }
        fetch();
    },[])

    useEffect(() => {

        if (bottom.current) {
            bottom.current.scrollIntoView({ behavior: load ? 'smooth' : 'auto' });
            setLoad(true);
        }

    }, [msg])


    useEffect(() => {
        if (location.state) {
            if (location.state.rid) setRid(location.state.rid);
            if (location.state.name) setName(location.state.name);

            if (location.state.rid && location.state.name && !list.some(item => item._id === location.state.rid)) {
            setList(prev => [...prev, { _id: location.state.rid, name: location.state.name }]);
        }
        }
    }, [location, list]);

    return (
        <>
            <div className='bg-[#19191b] flex flex-col items-center gap-[5vh] font-moderna text-white'>
                
                {list && list.length == 0 && rid === "" && 
                <div className="h-[70vh] w-[95%] flex-col flex justify-center border-[#333333] border-2 items-center rounded-[70px]">
                    <img src="chat.svg" alt="" className="w-[70%]"/>
                    <button onClick={() => {navigate('/search-rooms')}} className="bg-[#333333] rounded-2xl w-auto h-auto p-[7px] text-[40px]">New Chat</button>
                </div> }

                { ( (list && list.length != 0) || rid != "" ) && 
                <div className="grid grid-cols-3 h-[70vh] gap-x-[7px] w-[95vw] text-[20px]">
                    <div className="text-[20px] col-span-1 flex flex-col overflow-y-auto justify-start rounded-2xl p-[7px] bg-[#1f1f22] font-bold">
                        <div className="text-center text-[40px]">Chats</div>
                        
                        {list && list.map((items, index) => (
                            <button onClick={() => { setRid(items._id); setName(items.name) }} key={index} className="mb-[2px] text-start p-[2px] pl-[20px] w-[100%] flex gap-[20px] justify-start items-center">
                                <div className="border-2 border-[#65e687] rounded-[70px] w-[14%] overflow-hidden">
                                    <img src={`${user.gender === 'm' ? 'teen.png' : 'teen (1).png'}`} alt="" className="relative top-1 scale-107"/>
                                </div>
                                <div>{items.name}</div>
                            </button>
                        ))}

                    </div>
                    <div className="bg-[#1f1f22] col-span-2 overflow-y-auto rounded-2xl">
                    {rid!="" && 
                        <div className="flex flex-col relative items-center h-[100%] p-[7px]">
                            <div className="flex justify-start items-center w-[95%] gap-[22px] mb-[7px]">

                                <div className="border-2 border-[#65e687] rounded-[70px] w-[7%] overflow-hidden">
                                    <img src={`${user.gender === 'm' ? 'teen.png' : 'teen (1).png'}`} alt="" className="relative top-1 scale-107"/>
                                </div>
                                <div className="font-bold">{name}</div>

                            </div>
                            <div className="flex flex-col h-[70%] justify-start w-[95%] overflow-auto">
                                {msg && msg.map((item, index) => (

                                    <div key={index} className={`flex w-full ${item.rid === rid ? "justify-end" : "justify-start"} mb-2`}>
                                        <div className={`px-4 py-2 rounded-2xl break-words text-white ${item.rid === rid ? "bg-green-500" : "bg-gray-700"} max-w-[40%]`}>
                                            {item.message}
                                        </div>
                                    </div>

                                ))}
                                <div ref={bottom}></div>
                            </div>

                            <div className="absolute bottom-0 bg-[#2a2a2e] w-[95%] h-[70px] rounded-[70px] mb-[20px] flex justify-between items-center p-[7px] pl-[40px]">
                                <textarea onChange={(e) => { setText(e.target.value) }} value={text} name="" placeholder="Type a message ..." id="" className="w-[95%] resize-none border-none focus:outline-none"></textarea>
                                <button onClick={() => { sendMessage(text, rid); setText("")}} disabled={text == ""} className="rounded-[40px] w-[40px] h-[40px]">
                                    <img src={`${text === '' ? 'send-not.svg' : 'send.svg'}`} alt="" />
                                </button>
                            </div>

                        </div>}
                    </div>
                </div>}
            </div>

        </>
    )
}

export default ChatPage;