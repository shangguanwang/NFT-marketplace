import React from 'react';
import {BiStoreAlt} from 'react-icons/bi';

const Logo = () => {
  return (
    <div className='flex items-center'>
    <BiStoreAlt size={30} className='text-white'/>
    <h3 className='font-semibold text-2xl m-4 text-white'>NFT Marketplace</h3>
  </div>
  )
}

export default Logo