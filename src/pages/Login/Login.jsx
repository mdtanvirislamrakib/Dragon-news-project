import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const form  = e.target;

        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
          });
    }
    return (
        <div className='flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl text-center font-semibold'>Login To Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
                <p className='text-center font-semibold'>Don't have and account? <Link to ="/auth/register" className='text-secondary'>Register</Link> </p>
            </div>
        </div>

    );
};

export default Login;