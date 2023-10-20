import React from 'react';
import { SingleGetStarted } from '../components';
import { getStartedData } from '../assets/getStartedData';

const GetStarted = () => {
  return (
    <section className='mt-10 m-5'>
      <h2 className='text-left text-3xl font-bold my-5'>How It Works</h2>
      <p className='text-left capitalize text-xl'>Find out how to get started</p>
      <div className='flex'>
        {getStartedData.map((item)=> <SingleGetStarted key={item.id} image={item.image} title={item.title} description={item.description}/>)}
      </div>
    </section>
  )
}

export default GetStarted