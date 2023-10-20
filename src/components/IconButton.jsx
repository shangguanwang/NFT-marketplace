import React from 'react';

const IconButton = ({icon, text}) => {
  return (
    <button className='flex items-center gap-2 bg-purple-500 text-white my-5'>
        {icon}{text}
    </button>
  )
}

export default IconButton;