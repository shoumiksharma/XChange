import { Suspense, useState } from 'react'
import Home from './pages/HomePage'
import Profile from './pages/ProfilePage'
import RouteConfig from './routes/RouteConfig'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feedback from './components/Feedback'
import useFeedback from './hooks/useFeedback'

function App() {
  const {feedback, openFeedback, closeFeedback} = useFeedback();
  return (
    <>
      {/* <Home /> */}
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
