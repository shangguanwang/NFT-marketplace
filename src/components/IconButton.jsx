import React from 'react';

const IconButton = ({icon, text, style}) => {
  return (
    <button className={`${style} flex items-center gap-2 bg-purple-500 text-white my-7 py-4 px-6 rounded-xl`}>
        {icon}{text}
    </button>
  )
}

export default IconButton;