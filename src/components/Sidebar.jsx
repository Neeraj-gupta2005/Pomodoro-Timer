import React from 'react'
import Timezones from '../svg/Timezones';
import PomodoroSvg from '../svg/PomodoroSvg';
import Dailyplanner from './../svg/dailyplanner';
import WorldTime from './../svg/WorldTime';
import Timer from './../svg/Timer';
import Stopwatch from '../svg/Stopwatch';
import SideArrow from '../svg/sideArrow';

function Sidebar() {
  return (
    <div className='w-[48px] mx-auto pt-4 border-r-zinc-800 border-r bg-zinc-900'>
      <div className=' flex items-center justify-center flex-col gap-4'>
        {/* button */}
        <div className='text-zinc-500  bg-zinc-800 p-1 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-zinc-100 duration-100 transition-all mb-1'>
         <SideArrow />
        </div>
        <div>
          <Timezones />
        </div>

        <div>
          <PomodoroSvg />
        </div>

        <div>
          <Dailyplanner />
        </div>

        <div>
          <WorldTime />
        </div>

        <div>
          <Timer />
        </div>

        <div>
          <Stopwatch />
        </div>
      </div>
    </div>
  )
}

export default Sidebar