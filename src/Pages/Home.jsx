import React from 'react';
import Slider from './Slider';
import Featured from './Featured';
import ContactUs from './ContactUs';
import HowItWorks from './HowItWorks';
import BloodCompatibility from './BloodCompatibility';
import EmergencyGuidelines from './EmergencyGuidelines';
import OurServices from './OurServices';
import SafetyTrust from './SafetyTrust';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <Featured></Featured>
            <HowItWorks></HowItWorks>
            <BloodCompatibility></BloodCompatibility>
            <OurServices></OurServices>
            <EmergencyGuidelines></EmergencyGuidelines>
            <SafetyTrust></SafetyTrust>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;