import React from 'react';
import facebookLogo from "../../assets/fb.png"
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png"

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full *:border rounded-xl ">
                    <button className="flex items-center gap-4 py-2 text-left pl-5 font-semibold text-accent join-item">
                        <img src={facebookLogo} alt="" className='bg-base-200 rounded-full py-2 px-3' />
                        <p>Facebook</p>
                    </button>
                    <button className="flex items-center gap-4 py-2 text-left pl-5 font-semibold text-accent join-item">
                        <img src={instagramLogo} alt="" className='bg-base-200 rounded-full p-2' />
                        <p>Instagram</p>
                    </button>
                    <button className="flex items-center gap-4 py-2 text-left pl-5 font-semibold text-accent join-item">
                        <img src={twitterLogo} alt="" className='bg-base-200 rounded-full p-2' />
                        <p>Twitter</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;