import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import Button from "./Button";
import Fullscreen from "./../svg/Fullscreen";
import BoxContainer from "./BoxContainer";
import { GlobalContext } from "../context/Context";
import PauseButtonSVG from './../svg/PauseButtonSVG';
import ResetButtonSVG from './../svg/ResetButtonSVG';
import PlayButtonSVG from './../svg/PlayButtonSVG';

function Dailyplanner() {
  const { isFullScreen, selectedSound } = useContext(GlobalContext);
  const [time, setTime] = useState(0);
  const [maxTime, setMaxTime] = useState(60 * 60);
  const [CountDown, setCountDown] = useState(20);
  const [IsPaused, setIsPaused] = useState(false);
  const [TimeStarted, setTimeStarted] = useState(false);
  const [HasStarted, setHasStarted] = useState(false);
  // const [isInBreak, setIsInBreak] = useState(false);

  function stopAlarmSound(){
    if(soundRef.current){
      soundRef.current.pause();
      soundRef.current.currentTime = 0;
    }
  }

  const soundRef = useRef(null); // store sound reference

  function playSound() {
    soundRef.current = new Audio(`/audio/${selectedSound}`);
    soundRef.current.play();
  }

  const timerRef = useRef(null); // store interval ID
  const countdownRef = useRef(null); // store countdown interval
  
  
  function pause() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  
    setIsPaused(true);
    setTimeStarted(false);
  }
  function handleWidth() {
    const percentage = ((20 - CountDown) / 20) * 100;
    return percentage;
  }
  function reset() {
    console.log("reset");
    clearInterval(timerRef.current);
    clearInterval(countdownRef.current);
    timerRef.current = null;
    countdownRef.current = null;
    setTime(0);
    setCountDown(20);
    setIsPaused(false);
    setTimeStarted(false);
    setHasStarted(false);
    isInBreak.current = false // 🔁 reset break state
  }
  const isInBreak = useRef(false); // store break state
  
  function start() {
    if (timerRef.current || countdownRef.current) return; // Already running
    setTimeStarted(true);
    setHasStarted(true);
  
    if (isInBreak.current) {
      let countdown = CountDown; // local variable to avoid stale closure
      countdownRef.current = setInterval(() => {
        countdown -= 1;
        setCountDown(countdown); // update state
        console.log(countdown);
        if (countdown <= 0) {
          playSound();
          clearInterval(countdownRef.current);
          countdownRef.current = null;
          setCountDown(20); // reset for next break
          isInBreak.current = false; // exit break
          start(); 
        }
      }, 1000);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if(newTime >= maxTime){
            reset();
            return 0;
          }
          if (newTime % (60 * 20) === 0) {
            playSound();
  
            clearInterval(timerRef.current);
            timerRef.current = null;
  
            isInBreak.current = true;
            setCountDown(20);
            start();
          }
  
          return newTime;
        });
      }, 1000);
    }
  }
  
  

  
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearInterval(countdownRef.current);
    };
  }, []);
  


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex flex-col h-[100vh] w-full">
      {!isFullScreen && (
        <Navbar NavbarButton={NavbarButton} leftMostText={"20:20:20"} />
      )}

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col-reverse lg:flex-row gap-3 p-3 ">
        {/* rightpart */}
        {/* <div className=" h-full flex p-4 items-center flex-col justify-between w-full rounded-2xl  bg-zinc-900  "> */}
        <BoxContainer
          classes={
            "h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
          }
        >
          <div className="w-full flex gap-1 items-end justify-end">
            <Fullscreen />
          </div>

          <div className="w-[307px] flex flex-col ">
            <div className="w-full flex flex-col items-center justify-center p-2">
              <div className="flex items-end py-10 ">
                <div className=" text-5xl sm:text-8xl font-sans font-bold text-zinc-50 flex text-end gap-3  px-2">
                  <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
                  <p>:</p>
                  <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
                </div>
                <div className="text-zinc-50 font-bold mb-2 mr-2">|</div>
                <p className="tabular-nums font-sans text-lg font-bold mb-1 text-red-600">
                  {CountDown}
                </p>
              </div>
              <div className="rounded-xl mb-2 bg-zinc-800 w-4/5 sm:w-full h-1 overflow-hidden">
                <div
                  className="bg-red-600 h-full transition-all duration-500"
                  style={{ width: `${handleWidth()}%` }}
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                {!TimeStarted && !IsPaused && (
                  <Button
                    onClick={() => start()}
                    text={"Start"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<PlayButtonSVG />}
                  />
                )}

                {!TimeStarted && HasStarted && IsPaused && (
                  <Button
                    onClick={() => start()}
                    text={"Resume"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<PlayButtonSVG />}
                  />
                )}

                {TimeStarted && HasStarted &&(
                  <Button
                    onClick={() => {
                      pause();
                      stopAlarmSound();
                    }}
                    text={"Pause"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<PauseButtonSVG />}
                  />
                )}

                {HasStarted && (
                  <Button
                    onClick={() => {
                      reset();
                      stopAlarmSound();
                    }}
                    text={"Reset"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<ResetButtonSVG />}
                  />
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-zinc-700">Focus while caring for your eyes ❤</p>
          </div>
        </BoxContainer>
      </div>
    </div>
  );
}

export default Dailyplanner;
