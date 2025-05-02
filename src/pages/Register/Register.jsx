import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl text-center font-semibold'>Register Your Account</h2>
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">login</button>
                    </form>
                </div>
                <p className='text-center font-semibold'>Don't have and account? <Link to="/auth/login" className='text-secondary'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;