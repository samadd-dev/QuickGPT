import React, { useState } from 'react'
import Sidebar from './Components/sidebar'
import {Routes,Route} from 'react-router-dom'
import Chatbot from './Components/Chatbot.jsx'
import Credits from './Pages/Credits.jsx'
import Community from './Pages/Community.jsx'
import { assets } from './assets/assets.js'
import './assets/prism.css'
const App = () => {

  const [isMenuOpen,setIsMenuOpen]=useState(false)
  return (
    <>
    {!isMenuOpen && <img src={assets.menu_icon} className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert' onClick={()=>{setIsMenuOpen(true)}}/>}
    <div className='dark:bg-linear-to-b from-[#242121] to [#000000] dark:text-white'>
     <div className='flex h-screen w-screen'>
       <Sidebar isMenuOpen={isMenuOpen}  setIsMenuOpen={setIsMenuOpen}/>
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
