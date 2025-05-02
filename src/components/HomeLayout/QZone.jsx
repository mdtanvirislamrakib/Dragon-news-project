import React from 'react';
import swimming from "../../assets/swimming.png";
import playground from "../../assets/playground.png";
import classImage from "../../assets/class.png";

const QZone = () => {
    return (
        <div className='bg-base-200 px-2 py-4 rounded-lg'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swimming} alt="" className='w-full' />
                <img src={playground} alt="" className='w-full' />
                <img src={classImage} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default QZone;