import React from 'react';
import chairman from '../../assets/Khalilur-Rahman.png'
import principal from '../../assets/principal.png'

const About = () => {
    return (
        <div className='grid grid-cols-2 mt-20'>
            <div className='mx-20'>
                <h1 className='text-2xl text-[#5358B2] font-bold mb-5' >Viqarunnisa Noon School & College</h1>
                <p className='text-[#212529]'>Viqarunnisa Noon School & College is an all-girls educational institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses and around 25,000 students. Viqarunnisa Noon School & College is one of the renowned educational institutes in Bangladesh. We consider every child as unique and so we maintain inclusive learning-teaching environment at every step in our great set-up. It is a fact now that our results are getting better in the public examinations every time. It has been made possible through our extensive and effective care stretched out to every individual student. Our students conglomerate here from multifarious backgrounds; various strata of the society. They enter the threshold of our strong and fortified home of learning and come out bearing an all-round personality.</p>
                <h3 className='text-xl text-[#5358B2]'>Md. Khalilur Rahman</h3>
                <h5 className='text-sm text-[#414141]'>Chairman, Viqarunnisa Noon School & College
</h5>
            </div>
            <div className='flex'>
                <div className='w-[178px]'>
                    <img src={chairman}  alt="chairman" className="m-1 p-1 pb-2" />
                    <h6 className='text-[#5358B2]'>Md. Khalilur Rahman</h6>
                    <p className='text-[#7c7c7c] text-[12px]'>Chairman, Viqarunnisa Noon School & College
</p>
                </div>
                <div className='w-[178px]'>
                    <img src={principal} alt="principal" className="m-1 px-1" />
                    <h6 className='text-[#5358B2]'>Kamrun Nahar</h6>
                    <p className='text-[#7c7c7c] text-[12px]'>Principal, Viqarunnisa Noon School & College</p>
                </div>
            </div>
        </div>
    );
};

export default About;