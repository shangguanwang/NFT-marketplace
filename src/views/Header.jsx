import React from 'react';
import { Logo } from '../components';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <nav className='flex bg-neutral-800 px-6 justify-between'>
      <Logo />
      <div className='hidden lg:flex items-center gap-x-10'>
            <a className='text-lg text-white'>Marketplace</a>
            <a className='text-lg text-white' href="#learn">Learn</a>
            <a className='text-lg text-white'>Blog</a>
      </div>
      <div className='mt-3'>
            <ConnectButton />
      </div>
    </nav>
  )
}

export default Header