import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../../assets/Class_room.png'
import bg2 from '../../assets/teacher.png'
import bg3 from '../../assets/WhatsApp.jpg'

const OurOnlinePlatform = () => {
    return (
        <div className="grid grid-cols-4 mx-10 gap-4">
            <div className={`col-span-2 bg-black text-white p-5 `} style={{ 
      backgroundImage: `url(${bg1})` 
    }} >1</div>
            <div className={`bg-black p-5 text-white `} style={{ 
      backgroundImage: `url(${bg2})` 
    }} >2</div>
            <div className={`bg-black p-5 text-white `} style={{ 
      backgroundImage: `url(${bg2})` 
    }} >3</div>
            <Link onClick={() => window.location = 'https://facebook.com'} target="_blank">
            <div className={` text-white 
              m-5 shadow-2xl relative`} >
                <img src={bg3} alt="" />
                <div className='bg-[#ff7b6f] h-full w-full  absolute top-0 opacity-95 flex flex-col justify-center items-center text-white'>
                    <h1 className='text-xl'>VNSC Karate Club</h1>
                    <p className='text-2xl'>DETAILS</p>
                </div>
              </div></Link>
        </div>
    );
};

export default OurOnlinePlatform;