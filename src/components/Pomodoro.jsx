import React from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import PendingSVG from "./../svg/PendingSVG";
import CompletedSVG from "./../svg/CompletedSVG";
import SideArrow from "./../svg/SideArrow";
import CalendarSVG from "./../svg/CalendarSVG";
import Button from "./Button";
import AdjustManually from './../svg/AdjustManually';
import Fullscreen from './../svg/Fullscreen';

function Pomodoro() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />

      {/* main content */}
      <div className=" flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3">
        {/* leftpart */}
        <div className=" w-[398px] rounded-2xl  bg-zinc-900 border border-zinc-800 p-3">
          <header className="flex items-center justify-between">
            <div className="flex items-center text-center gap-2 ">
              <NavbarButton
                text={"Pending"}
                Icon={PendingSVG}
                isArrow={false}
                classes={
                  "h-full px-2 p-0.5 gap-1 text-[12px]  bg-zinc-800 rounded-md "
                }
              />
              <NavbarButton
                text={"Completed"}
                Icon={CompletedSVG}
                isArrow={false}
                classes={
                  "h-full p-0.5 px-1 gap-1 cursor-pointer hover:bg-zinc-800 rounded-md text-[12px] "
                }
              />
            </div>

            <div className="text-center gap-2 flex justify-center ">
              <NavbarButton
                text={"05 Apr"}
                Icon={CalendarSVG}
                isArrow={false}
                classes={
                  " flex px-1 items-center text-xs gap-1 justify-between cursor-pointer hover:bg-zinc-700 hover:text-zinc-300 bg-zinc-800 rounded-md cursor-pointer "
                }
              />

              <div className="flex gap-0.5">
                <div className="text-zinc-500 p-1 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-zinc-100 duration-100 transition-all mb-1 rotate-180">
                  <SideArrow />
                </div>
                <div className="text-zinc-500 p-1 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-zinc-100 duration-100 transition-all mb-1">
                  <SideArrow />
                </div>
              </div>
            </div>
          </header>

          <div className="flex items-center justify-center h-full w-full flex-col">
            <div className="flex mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-square-check-big mb-3 flex h-[45px] w-[45px] flex-shrink-0 cursor-pointer items-center justify-center rounded-md text-zinc-800"
              >
                <path d="m9 11 3 3L22 4"></path>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <p className="text-[14px] mb-1 text-zinc-600 ">
              No tasks for this day
            </p>
            <p className="text-[14px] text-zinc-500 underline hover:text-zinc-100 cursor-pointer">
              Add a new task
            </p>
          </div>
        </div>

        {/* rightpart */}
        <div className="flex p-4 items-center flex-col justify-between w-full rounded-2xl flex-1 bg-zinc-900 border border-zinc-800 ">
          <div className="w-full flex gap-1 items-end justify-end">
            <AdjustManually/>
            <Fullscreen/>
          </div>

          <div className="w-1/2 flex flex-col ">
            <div className="w-full flex flex-col items-center justify-center p-2">
              <div className="flex items-center gap-2 ">
                <Button text={"Focus"} />
                <Button text={"Short Break"} />
                <Button text={"Long Break"} />
              </div>
              <div className="text-8xl font-sans font-bold text-zinc-50 flex text-end gap-3 py-10 px-2">
                <p>25</p>
                <p>:</p>
                <p>00</p>
              </div>
              <div className="rounded-xl bg-zinc-800 w-full h-1" />
              <div className="flex gap-2 text-[14px] text-zinc-500 justify-evenly my-3 w-full">
                <p>+ 25 min</p>
                <p>+ 10 min</p>
                <p>+ 5 min</p>
                <p>+ 1 min</p>
              </div>
              <div className="mt-3">
                <Button text={"Start"} />
              </div>
            </div>
          </div>

          <div>
            <p className="text-zinc-700">No sessions today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
