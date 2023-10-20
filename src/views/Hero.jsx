import React from 'react';
import IconButton from '../components/IconButton';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Discover Digital Art & Collect NFTs</h1>
        <p className='capitalize text-xl'>Collect, buy and sell art from more than 20k NFT artists.</p>
        <IconButton icon={<BsFillRocketTakeoffFill />} text="Get Started" />
      </div>
    </section>
  )
}

export default Hero