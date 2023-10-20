import React from 'react';

const NumberCard = ({number, text}) => {
  return (
    <div>
        <h3 className='font-bold text-xl'>{number}k+</h3>
        <p className='text-xl'>{text}</p>
    </div>
  )
}

export default NumberCard;
