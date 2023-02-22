import React from 'react';
import bkash from '../../assets/bkash.png'
import rocket from '../../assets/rocket.png'
import dbbl from '../../assets/dbbl.jpg'
import sbl from '../../assets/Sonali-Bank-logo.png'
import mobileUi from '../../assets/appui.png'
import addayon from '../../assets/71529.png'
import { Link } from 'react-router-dom';

const OnlinePayment = () => {
    return (
        <div className='grid grid-cols-2 my-20 justify-end'>
            <div className="">
                <h1 className='text-xl mr-4 mx-20'>Online Payment Procedure</h1>
                <p className='text-lg mb-5 text-[#7c7c7c] mx-20'>You can pay any fee through</p>
                <div className="grid grid-cols-2 gap-4 mx-14">
                    <img src={bkash} alt=""  className=" shadow-xl rounded-2xl p-7"/>
                    <img src={rocket} alt="" className=" shadow-xl rounded-2xl p-7" />
                    <img src={dbbl} alt=""   className=" shadow-xl rounded-2xl p-7"/>
                    <img src={sbl} alt=""    className=" shadow-xl rounded-2xl p-7"/>
                </div>
            </div>
            <div className="flex mx-2">
                <img src={mobileUi} alt="" className='mr-3' />
                <div className='flex flex-col justify-end gap-3 mr-2'>
                    <h5 className='text-lg text-[#7c7c7c]'>You can pay any fee through</h5>
                    <p className='text-xl text-[#d12053]'>Parent's Portal</p>
                    <img src={addayon} alt="" className='h-14' />
                    <Link className='link text-[#1f8ddd]'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default OnlinePayment;