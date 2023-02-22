import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollBar from '../components/ScrollBar';
import About from './components/About';
import OnlinePayment from './components/OnlinePayment';
import NoticeBoard from './components/NoticeBoard';
import OurOnlinePlatform from './components/OurOnlinePlatform';

const Home = () => {
    return (
        <div>
            <ScrollBar />
            <Navbar></Navbar>
            <About></About>
            <OnlinePayment></OnlinePayment>
            <NoticeBoard></NoticeBoard>
            <OurOnlinePlatform></OurOnlinePlatform>
            <Footer></Footer>
        </div>
    );
};

export default Home;