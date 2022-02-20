import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Depertment from '../Depertment/Depertment';
import FeaturedService from '../FeaturedService/FeaturedService';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Doctor from './../Doctor/Doctor';

const Home = () => {
    return (
        <div>
            <Header/>
            <FeaturedService/>
            <Services/>
            <MakeAppointment/>
            <Depertment/>
            <Doctor/>
            <Contact/>
            <Pricing/>
            <Gallery/>
            <Testimonials/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Home;