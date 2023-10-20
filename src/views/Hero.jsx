import React from 'react';
import {IconButton, NumberCard} from '../components';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <section>
      <article className='w-1/2'>
        <h1 className='font-bold'>Discover Digital Art & Collect NFTs</h1>
        <p className='capitalize text-xl'>Collect, buy and sell art from more than 20k NFT artists.</p>
        <IconButton icon={<BsFillRocketTakeoffFill />} text="Get Started" />
        <div className='flex justify-between'>
          <NumberCard number="240" text="Total Sale" />
          <NumberCard number="100" text="Auctions" />
          <NumberCard number="370" text="Artists" />
        </div>
      </article>
    </section>
  )
}

export default Hero