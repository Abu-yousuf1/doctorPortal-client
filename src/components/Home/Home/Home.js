import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import BlogData from '../BlogsData/BlogData';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
              <Header></Header>
              <Services></Services>
                <FeaturedService></FeaturedService>
                <MakeAppointment></MakeAppointment>
                <Testimonials></Testimonials>
                <BlogData></BlogData>
                <Doctors></Doctors>
                <Contact></Contact>
                <Footer></Footer>



        </div>
    );
};

export default Home;