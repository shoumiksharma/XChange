import { Suspense, useEffect, useState } from 'react'
import RouteConfig from './routes/RouteConfig'
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feedback from './components/Feedback'
import useFeedback from './hooks/useFeedback'
import { useDispatch } from 'react-redux'

function App() {
  const {feedback, openFeedback, closeFeedback} = useFeedback();
  const dispatch = useDispatch();

  const getInitialState = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/authentication`, {
      method : "GET",
      headers : {
        'Content-Type' : 'application/json'
      },
      credentials : "include"
    })
  
    if(response.status == 200){
      dispatch({type : 'logIn'});
    }
    else{
      dispatch({type : 'logOut'});
    }
  }

  useEffect(() => {
    getInitialState();
  }, [])

  return (
    <>
      <div className='bg-[#19191b] min-h-screen flex flex-col items-center gap-[5vh] font-moderna text-white'>
      <BrowserRouter>
        <Navbar openFeedback={openFeedback} />
        {feedback && (<Feedback closeFeedback={closeFeedback}/>)}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
            <RouteConfig />
        {/* </Suspense> */}
      </BrowserRouter></div>
    </>
  )
}

export default App
