import React from 'react';
import {IconButton, NumberCard} from '../components';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import AutumnMxse from '../assets/AutumnMxse.png';
import GxngYxng from '../assets/gxngyxng.jpeg';

const Hero = () => {
  return (
    <section className='lg:flex lg:justify-between gap-12 p-7 lg:p-36 lg:px-20 bg-neutral-800 w-full'>
      <article className='lg:w-1/2 text-white'>
        <h1 className='font-bold my-7 text-2xl lg:text-4xl leading-tight'>Discover Digital Art & Collect NFTs</h1>
        <p className='capitalize text-xl'>Collect, buy and sell art from more than 370k NFT artists.</p>
        <IconButton style="mx-auto" icon={<BsFillRocketTakeoffFill />} text="Get Started" />
        <div className='lg:flex justify-between mt-10'>
          <NumberCard number="240" text="Total Sale" />
          <NumberCard number="100" text="Auctions" />
          <NumberCard number="370" text="Artists" />
        </div>
      </article>
      <article className='mx-auto w-96 rounded-2xl text-left bg-neutral-600'>
          <img className='w-96 rounded-2xl' src={AutumnMxse} alt="AutumnMxse is an NFT artwork created by artist GxngYxng" />
            <h3 className='font-bold text-xl ml-3 mt-3 text-white'>Autumn Mxse</h3>
            <div className='flex gap-2 ml-3 mb-3 pb-3 text-white'>
              <img className='w-5 rounded-full' src={GxngYxng} alt="Artist GxngYxng's headshot"/>
              <span>GxngYxng</span>
            </div>
      </article>
    </section>
  )
}

export default Hero