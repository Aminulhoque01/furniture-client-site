import React, { useState } from 'react';
import Category from '../../pages/Category/Category';
import Carousel from '../../pages/slider/Carousel';

const Home = () => {
    

    return (
        <div className='px-5 py-5'>
           <Carousel/>
           <Category></Category>
        </div>
    );
};

export default Home;