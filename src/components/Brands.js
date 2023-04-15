import React from 'react';
import {brands} from '../data';


const Brands = () => {
  return (
  <section className='min-h-24 bg-tertiary flex items-center'>
    <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
    {brands.map((item,index)=>(
       <div key={index} className='py-4 w-24 h-24'>
            <img src={item.img} className='max-h-12 md:max-h-24 cursor-pointer' alt={item.href}/>
       </div>
    ))}
    </div>
  </section>
  );
};

export default Brands;
