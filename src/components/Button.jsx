import React from "react";

function Button({ text }) {
  return (
    <button className="text-[16px] text-zinc-500 bg-zinc-800 hover:bg-zinc-700 rounded-md px-2 py-1 cursor-pointer duration-100 transition-all">
      {text}
    </button>
  );
}

export default Button;
