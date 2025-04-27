import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { createNewUser, setUser, updateUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        const profileInfo = {
            displayName: name,
        }

        console.log(name, email, password);

        createNewUser(email, password)
            .then(res => {
                console.log(res.user);
                setUser(res.user);

                const createdAt = res.user.metadata.creationTime;

                const newUser = {
                    name,
                    email,
                    password,   // in working website never insert password in the database 
                    createdAt,
                }

                fetch('http://localhost:6010/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.acknowledged)
                        {
                            console('new user added in the db');
                        }
                    })

                updateUser(profileInfo)
                    .then(() => {

                    })
                    .catch(error => {
                        console.log(error.code);
                    })

            })
            .then(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pb-10">Sign Up now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                    <Link to="/auth/login" className='font-semibold text-center pb-5 text-sm'>Login?</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;