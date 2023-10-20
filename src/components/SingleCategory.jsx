import React from 'react'

const SingleCategory = ({bgimg, icon, text}) => {
  return (
    <article className='relative w-64 bg-gray-500 rounded-2xl'>
        <img className='w-64 rounded-2xl blur-sm' src={bgimg} alt={`${text} category`} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12 text-white'>
            {icon}
        </div>
        <div className='bg-gray-500 h-14 rounded-2xl'>
            <h3 className='absolute font-semibold text-xl m-4 text-white'>{text}</h3>
        </div>
    </article>
  )
}

export default SingleCategory