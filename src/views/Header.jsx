import React from 'react';
import { IconButton, Logo } from '../components';
import {RxAvatar} from 'react-icons/rx';

const Header = () => {
  return (
    <nav className='flex bg-neutral-800 px-6 justify-between'>
      <Logo />
      <div className='flex items-center gap-x-10'>
            <a className='text-lg text-white'>Marketplace</a>
            <a className='text-lg text-white'>Learn</a>
            <a className='text-lg text-white'>Blog</a>
        <IconButton icon={<RxAvatar size={30} />} text="Sign Up" />
      </div>
    </nav>
  )
}

export default Header