import React from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import PendingSVG from "./../svg/PendingSVG";
import CompletedSVG from "./../svg/CompletedSVG";

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

          <div className="text-center gap-2">
            <NavbarButton
              text={"Pending"}
              Icon={PendingSVG}
              isArrow={false}
              classes={
                "h-full px-2 p-0.5 flex items-center gap-1 text-[12px] cursor-pointer hover:bg-zinc-700 hover:text-zinc-300 bg-zinc-800 rounded-md cursor-pointer "
              }
            />
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
