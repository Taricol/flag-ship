import React from 'react';
import bannerImg from '../assets/banner.png'
const Hero = () => {
    return (
        <div className='py-12'>
            <img src={bannerImg} alt="Banner Image" className='w-full mx-auto md:max-w-md' />
        </div>
    );
};

export default Hero;