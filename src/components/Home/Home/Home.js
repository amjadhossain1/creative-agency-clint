import React from 'react';
import './Home.css'
import Clint from '../Clint/Clint';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Clint/>
            <Services/>
            <Slider/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;