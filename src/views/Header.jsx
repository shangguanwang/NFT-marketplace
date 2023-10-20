import React from 'react';
import {BiStoreAlt} from 'react-icons/bi';
import { IconButton } from '../components';
import {RxAvatar} from 'react-icons/rx';

const Header = () => {
  return (
    <nav className='flex bg-neutral-800 px-6 justify-between'>
      <div className='flex items-center'>
        <BiStoreAlt size={30} className='text-white'/>
        <h3 className='font-semibold text-2xl m-4 text-white'>NFT Marketplace</h3>
      </div>
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