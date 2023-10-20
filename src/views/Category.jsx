import React from 'react';
import { SingleCategory } from '../components';
import bgCollectible from '../assets/bgCollectible.jpg';
import {AiOutlineUsb} from 'react-icons/ai';

const Category = () => {
  return (
    <section className='mt-10'>
      <h2 className='text-left text-3xl font-bold ml-5'>Browse Categories</h2>
      <div>
        <SingleCategory bgimg={bgCollectible} icon={<AiOutlineUsb size={50}/>} text="Collectibles" />
      </div>
    </section>
  )
}

export default Category