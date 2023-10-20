import React from 'react';
import { SingleCategory } from '../components';
import bgCollectible from '../assets/bgCollectible.jpg';
import {AiOutlineUsb} from 'react-icons/ai';
import { categoryData } from '../assets/categoryData';

const Category = () => {
  return (
    <section className='mt-10 m-5'>
      <h2 className='text-left text-3xl font-bold my-5'>Browse Categories</h2>
      <div className='lg:grid lg:grid-rows-2 lg:grid-cols-4 gap-4'>
        {categoryData.map((category)=> <SingleCategory key={category.id} bgimg={category.imgUrl} icon={category.icon} text={category.title} />)}
      </div>
    </section>
  )
}

export default Category