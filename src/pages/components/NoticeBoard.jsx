import React from 'react';
import notice from '../../assets/notices.png'

const NoticeBoard = () => {
    return (
        <div className='grid grid-cols-2 bg-[#ffe780] py-10 px-10 mx-10 my-10'>
            <div>
                <img src={notice} alt="" className='w-[70%]' />
            </div>
            <div className='h-[300px] bg-[#f2f2f2] shadow-2xl rounded-2xl p-4'>
                <h1 className='w-full bg-white py-2 px-2 rounded-lg shadow'>notice slider</h1>
            </div>
        </div>
    );
};

export default NoticeBoard;