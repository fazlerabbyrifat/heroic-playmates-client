import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryShop from '../CategoryShop/CategoryShop';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryShop></CategoryShop>
        </div>
    );
};

export default Home;