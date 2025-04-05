import React from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import PendingSVG from "./../svg/PendingSVG";
import CompletedSVG from "./../svg/CompletedSVG";
import SideArrow from "./../svg/SideArrow";
import CalendarSVG from './../svg/CalendarSVG';

function Pomodoro() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />

      {/* main content */}
      <div className=" flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3">
        <div className=" w-[398px] rounded-2xl flex justify-between items-start bg-zinc-900 border border-zinc-800 p-3">
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
        </div>
        <div className="w-full rounded-2xl flex-1 bg-zinc-900 border border-zinc-800 p-3">
          h
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
