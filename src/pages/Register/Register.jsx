import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser(user, { displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        console.log(user);
                        navigate("/")
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user)
                    })


            })
            .catch((error) => {
                console.log(error);
                // ..
            });

    }


    return (
        <div className='flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl text-center font-semibold'>Register Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input name='photourl' type="text" className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                </div>
                <p className='text-center font-semibold'>Don't have and account? <Link to="/auth/login" className='text-secondary'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;