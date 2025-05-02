import React from 'react';
import { FaGithub  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <p className="font-bold text-lg"> Login with</p>

            <div className='space-y-3'>
               <button className='btn w-full btn-secondary btn-outline'> <FcGoogle size={25} /> Login With Google</button>
               <button className='btn w-full btn-primary btn-outline'> <FaGithub size={25} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;