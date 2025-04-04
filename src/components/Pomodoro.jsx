import React from 'react'

function Pomodoro() {
  return (
    <div className='flex flex-1 flex-col h-full'>

      <div className='h-[33px] w-full bg-zinc-900 border-b border-b-zinc-800'>Navbar</div>
      <div className='flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3'>
        <div className='rounded-2xl w-[498px]  bg-zinc-900 border border-zinc-800 p-3'>h</div>
        <div className='rounded-2xl flex-1 bg-zinc-900 border border-zinc-800 p-3'>h</div>
      </div>
    </div>
  )
}

export default Pomodoro