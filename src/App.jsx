import React, { useState } from 'react'
import Sidebar from './Components/Sidebar.jsx'
import {Routes,Route, useLocation} from 'react-router-dom'
import Chatbot from './Components/Chatbot.jsx'
import Credits from './Pages/Credits.jsx'
import Community from './Pages/Community.jsx'
import { assets } from './assets/assets.js'
import './assets/prism.css'
import Loading from './Pages/Loading.jsx'
import { useAppContext } from './Context/AppContext.jsx'
import Login from './Pages/Login.jsx'
const App = () => {

  const{user}=useAppContext()
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const {pathname}=useLocation();

  if(pathname === '/loading') return <Loading/>
  return (
    <>
    {!isMenuOpen && <img src={assets.menu_icon} className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden dark:invert' onClick={()=>{setIsMenuOpen(true)}}/>}
    {user? (<div className='dark:bg-linear-to-b from-[#242121] to-[#000000] dark:text-white'>
     <div className='flex h-screen w-screen'>
       <Sidebar isMenuOpen={isMenuOpen}  setIsMenuOpen={setIsMenuOpen}/>
        <Routes>
          <Route path='/' element={<Chatbot/>} />
          <Route path='/Credits' element={<Credits/>} />
          <Route path='/Community' element={<Community/>} />
        </Routes>
      </div>
    </div>
    )
    :(
      <div className='bg-linear-to-be from-[#242121] to-[#000000] flex items-center justify-center h-screen w-screen'>
        <Login/>
      </div>
    )}
    </>
  )
}

export default App
