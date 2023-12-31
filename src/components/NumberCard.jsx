import React from 'react';

const NumberCard = ({number, text}) => {
  return (
    <div className='m-2'>
        <h2 className='font-bold text-xl'>{number}k+</h2>
        <p className='text-xl'>{text}</p>
    </div>
  )
}

export default NumberCard;
