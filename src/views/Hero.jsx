import React from 'react';
import {IconButton, NumberCard} from '../components';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import AutumnMxse from '../assets/AutumnMxse.png';
import GxngYxng from '../assets/gxngyxng.jpeg';

const Hero = () => {
  return (
    <section className='lg:flex gap-12'>
      <article className='lg:w-1/2'>
        <h1 className='font-bold my-7'>Discover Digital Art & Collect NFTs</h1>
        <p className='capitalize text-xl'>Collect, buy and sell art from more than 370k NFT artists.</p>
        <IconButton icon={<BsFillRocketTakeoffFill />} text="Get Started" />
        <div className='flex justify-between mt-10'>
          <NumberCard number="240" text="Total Sale" />
          <NumberCard number="100" text="Auctions" />
          <NumberCard number="370" text="Artists" />
        </div>
      </article>
      <article className='w-96 rounded-2xl text-left bg-gray-300'>
          <img className='w-96 rounded-2xl' src={AutumnMxse} alt="AutumnMxse is an NFT artwork created by artist GxngYxng" />
            <h3 className='font-bold text-xl ml-3 mt-3'>Autumn Mxse</h3>
            <div className='flex gap-2 ml-3 mb-3'>
              <img className='w-5 rounded-full' src={GxngYxng} alt="Artist GxngYxng's headshot"/>
              <span>GxngYxng</span>
            </div>
      </article>
    </section>
  )
}

export default Hero