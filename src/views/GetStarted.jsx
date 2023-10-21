import React from 'react';
import { SingleGetStarted } from '../components';
import { getStartedData } from '../assets/getStartedData';

const GetStarted = () => {
  return (
    <section id="learn" className='p-5 lg:p-10 bg-neutral-800'>
      <h2 className='text-left text-3xl font-bold my-5 text-white'>How It Works</h2>
      <p className='text-left capitalize text-xl text-white'>Find out how to get started</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {getStartedData.map((item)=> <SingleGetStarted key={item.id} image={item.image} title={item.title} description={item.description}/>)}
      </div>
    </section>
  )
}

export default GetStarted