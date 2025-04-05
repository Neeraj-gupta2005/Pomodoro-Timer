import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex flex-row h-[100vh] '>
      <Sidebar/>
      <main className='main-content bg-black w-full h-[100vh]'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
