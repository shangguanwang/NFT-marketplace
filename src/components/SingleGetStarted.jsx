import React from 'react'

const SingleGetStarted = ({image, title, description}) => {
  return (
    <article className='bg-neutral-600 rounded-2xl m-3 p-5 flex flex-col items-center justify-center'>
      <img className='w-64 h-48' src={image} alt={title} />
      <div className='mt-5'>
      <h3 className='font-semibold text-xl m-4 text-white'>{title}</h3>
      <p className='text-white'>{description}</p>
      </div>
    </article>
  )
}

export default SingleGetStarted