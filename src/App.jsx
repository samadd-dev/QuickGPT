import React from 'react'
import Sidebar from './Components/sidebar'
import {Routes,Route} from 'react-router-dom'
import Chatbot from './Components/Chatbot.jsx'
import Credits from './Pages/Credits.jsx'
import Community from './Pages/Community.jsx'
const App = () => {
  return (
    <>
    <div className='dark:bg-linear-to-b from-[#242121] to [#000000] dark:text-white'>
     <div className='flex h-screen w-screen'>
       <Sidebar/>
        <Routes>
          <Route path='/' element={<Chatbot/>} />
          <Route path='/Credits' element={<Credits/>} />
          <Route path='/Community' element={<Community/>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
