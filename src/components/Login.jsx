import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            email,
            password,
        }

        console.log(user);

        loginUser(email, password)
            .then(res => {
                setUser(res.user);
                console.log(res.user);

                const lastLogin = res?.user?.metadata?.lastSignInTime

                const updatedLog = { email, lastLogin };

                fetch(`http://localhost:6010/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(updatedLog),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('sign in info updated in db', data);
                    })

            })
            .catch(error => {
                console.log(error.code);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pb-10">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <Link to="/auth/signup" className='font-semibold text-center pb-5 text-sm'>Sign Up?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;