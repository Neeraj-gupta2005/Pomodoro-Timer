import React from 'react'
import NavbarButton from './NavbarButton'
import FolderIcon from '../svg/Foldericon'
import GeneralSVG from '../svg/GeneralSVG'

function Pomodoro() {
  return (
    <div className='flex flex-1 flex-col h-full'>
      <div className='h-[33px] flex items-center text-center px-2 w-full bg-zinc-900 border-b border-b-zinc-800'>
        <div className='flex gap-2'>
          <p className='text-[14px] font-sans p-0.5'>Pomodoro</p>
          <p className='text-[14px] text-zinc-700 mr-2 font-sans'>/</p>
          <NavbarButton text={"Personal"} Icon={FolderIcon} isArrow={true}/>
          <NavbarButton text={"General"} Icon={GeneralSVG} isArrow={true}/>
        </div>
      </div>

      <div className='flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3'>
        <div className='rounded-2xl w-[498px]  bg-zinc-900 border border-zinc-800 p-3'>h</div>
        <div className='rounded-2xl flex-1 bg-zinc-900 border border-zinc-800 p-3'>h</div>
      </div>
    </div>
  )
}

export default Pomodoro