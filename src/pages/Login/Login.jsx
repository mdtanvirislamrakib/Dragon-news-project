import React from 'react';
import { Link, NavLink } from 'react-router';

const Login = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl text-center font-semibold'>Login To Your Account</h2>
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
                <p className='text-center font-semibold'>Don't have and account? <Link to ="/auth/register" className='text-secondary'>Register</Link> </p>
            </div>
        </div>

    );
};

export default Login;