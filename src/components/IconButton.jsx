import React from "react";

const IconButton = ({ icon, text, style, clickEvent }) => {
  return (
    <button
      onClick={clickEvent}
      className={`${style} flex items-center gap-2 bg-purple-600 hover:cursor-pointer hover:bg-purple-500 text-white font-semibold my-7 py-4 px-6 rounded-xl`}
    >
      {icon}
      {text}
    </button>
  );
};

export default IconButton;
