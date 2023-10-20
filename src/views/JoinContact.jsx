import React from 'react';
import newspaper from '../assets/newspaper.jpg';
import { IconButton } from '../components';
import {AiOutlineMail} from 'react-icons/ai';

const JoinContact = () => {
  return (
    <section className='lg:flex gap-16 mt-10 lg:m-8 px-5 lg:px-20 py-10 bg-gray-500 rounded-2xl'>
      <img className='rounded-2xl w-96' src={newspaper} alt="Reading newspaper" />
      <article className='lg:w-1/2 text-left'>
      <h2 className='text-xl lg:text-3xl font-bold my-5 capitalize text-white'>Join our weekly digest</h2>
      <p className='capitalize text-lg lg:text-xl text-white'>Get exclusive promotions & updates straight to your inbox.</p>
      <div className='flex items-center h-14 mt-6'>
        <input type='text' name="email" id="email" placeholder='Enter Your Email Here' className='lg:w-2/3 p-4 rounded-l-xl'></input>
        <div className='transform -translate-x-5'>
          <IconButton icon={<AiOutlineMail />} text="Subscribe"/>
        </div>
      </div>
      </article>
    </section>
  )
}

export default JoinContact