import React from 'react';

import AboutImage from '../assets/img/about.jpeg';

const About = () =>{
    return(
        <section id="about" className='section bg-secondary'>
            <div className='conatiner mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-full w-[466px] md:mx-auto lg:ml-4 rounded-2xl' src= {AboutImage} alt="about" />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absoulte before:opacity-40 before:-top-[2rem]
                            before:hidden before:lg:block mx-8'> Dimitris Dekavallas</h2>
                            <p className='mb-4 text-accent mx-8'>Guitarist</p>
                            <hr className='mb-8 opacity-5'></hr>
                            <p className='mb-8 mx-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all mx-8'>Contact me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;