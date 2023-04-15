import React from 'react';


const Project = ({item}) => {
    return(

        <div key={item.id} className='flex flex-col items-center text-center'>
            <div className='mb-8'>
            <img src={item.image} alt="" className='rounded-xl'/>

            </div>
            <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
            <h3 className='text-xl font-semibold capitalize mb-3'>{item.name}</h3>
        </div>
    )
}

export default Project;