import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImage from "../../assets/user.png"
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div>{user && <p>{user.name}</p>}</div>
            <div className='nav flex items-center gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-6'>
                <img src={userImage} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;