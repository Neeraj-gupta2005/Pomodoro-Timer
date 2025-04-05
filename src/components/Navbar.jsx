import React from "react";
import NavbarButton from "./NavbarButton";
import FolderIcon from "../svg/Foldericon";
import GeneralSVG from "../svg/GeneralSVG";
import FeedbackSVG from "./../svg/FeedbackSVG";
import FocusSVG from "./../svg/FocusSVG";

function Navbar() {
  return (
    <>
      {/* navbar */}
      <div className="h-[33px] justify-between flex items-center text-[14px] text-center pl-2 w-full bg-zinc-900 border-b border-b-zinc-800">
        <div className="flex gap-2">
          <p className="text-[14px] font-sans p-0.5">Pomodoro</p>
          <p className="text-[14px] text-zinc-700 mr-2 font-sans">/</p>
          <NavbarButton text={"Personal"} Icon={FolderIcon} isArrow={true} />
          <NavbarButton text={"General"} Icon={GeneralSVG} isArrow={true} />
        </div>
        <div className="flex h-full gap-2">
          <div className="flex h-full ">
            <NavbarButton
              text={"Feedback"}
              Icon={FeedbackSVG}
              isArrow={false}
              classes={
                "h-full px-1 flex items-center gap-1 cursor-pointer hover:bg-zinc-800 "
              }
            />
            <NavbarButton
              text={"Focus"}
              Icon={FocusSVG}
              isArrow={false}
              classes={
                "h-full px-1 flex items-center gap-1 cursor-pointer hover:bg-zinc-800 "
              }
            />
          </div>
          <div className="flex h-full">
            <div className="h-full px-1 flex items-center gap-1 text-[14px]">
              <span className="text-zinc-50 ">11</span>
              <span>:</span>
              <span className="text-zinc-50 ">20</span>
              <span>AM</span>
            </div>
            <div className="h-full bg-zinc-800 text-zinc-400 px-2 flex items-center gap-1 text-[14px] font-bold  cursor-pointer hover:bg-zinc-700 ml-1 transition duration-100">
              <span>12</span>
              <span>hr</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
