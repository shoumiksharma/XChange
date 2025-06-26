import { Suspense, useEffect, useState } from 'react'
import RouteConfig from './routes/RouteConfig'
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feedback from './components/Feedback'
import useFeedback from './hooks/useFeedback'
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client";
import { setSocket } from './redux/socketReducer'
import { setUser } from './redux/userReducer'

function App() {
    const { feedback, openFeedback, closeFeedback } = useFeedback();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const getInitialState = async () => {
        // console.log("authenticating");
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/authentication`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
        const data = await response.json();
        console.log(data);

        if (response.status == 200) {
            dispatch({ type: 'logIn' });
            // console.log("fetching data")
            
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/data`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            })
            const data = await response.json();
            console.log(data);

            dispatch(setUser(data));

        }
        else {
            dispatch({ type: 'logOut' });
        }
    }

    useEffect(() => {
        getInitialState();
    }, [isLoggedIn])

    useEffect(() => {
        if (isLoggedIn) {
            console.log("logged in");
            const socket = io(`${import.meta.env.VITE_BACKEND_URL}`, {
                withCredentials : true
            });
            dispatch(setSocket(socket));

            socket.on("connect", () => {
                console.log("connected");
            })

            socket.on("disconnect", () => {
                console.log("disconnected");
            })

            // socket.on("receiveMsg", (data) => {
            //     console.log(data);
            // })

            return () => {
                socket.disconnect();
            }

        }


    }, [isLoggedIn])

    return (
        <>
            <div className='bg-[#19191b] min-h-screen flex flex-col items-center gap-[5vh] font-moderna text-white'>
                <BrowserRouter>
                    <Navbar openFeedback={openFeedback} />
                    {feedback && (<Feedback closeFeedback={closeFeedback} />)}
                    {/* <Suspense fallback={<div>Loading...</div>}> */}
                    <RouteConfig />
                    {/* </Suspense> */}
                </BrowserRouter></div>
        </>
    )
}

export default App


