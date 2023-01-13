import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollBar from '../components/ScrollBar';

const Home = () => {
    return (
        <div>
            <ScrollBar />
            <Navbar></Navbar>
            <h1>this is Home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;