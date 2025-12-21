import React from 'react';
import Slider from './Slider';
import Featured from './Featured';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <Featured></Featured>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;