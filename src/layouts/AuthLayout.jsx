import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header className="mb-5 bg-[url('/public/images/more/15.jpg')] py-5" >
                <div className='flex justify-center items-center gap-5'>
                    <img className='w-10' src="/public/images/more/logo1.png" alt="" />
                    <p className='text-3xl text-white font-rancho'>Espresso Emporium</p>
                    <Link to="/users" className='text-white'>Users</Link>

                    {/* import font from google and set up tailwind.config.js  */}
                </div>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;