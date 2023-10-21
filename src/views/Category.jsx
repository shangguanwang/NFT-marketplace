import React from 'react';
import { SingleCategory } from '../components';
import bgCollectible from '../assets/bgCollectible.jpg';
import {AiOutlineUsb} from 'react-icons/ai';
import { categoryData } from '../assets/categoryData';

const Category = () => {
  return (
    <section className='p-10 bg-neutral-800'>
      <h2 className='text-left text-3xl font-bold my-5 text-white'>Browse Categories</h2>
      <div className='lg:grid grid-cols-1 lg:grid-cols-4'>
        {categoryData.map((category)=> <SingleCategory key={category.id} bgimg={category.imgUrl} icon={category.icon} text={category.title} />)}
      </div>
    </section>
  )
}

export default Category