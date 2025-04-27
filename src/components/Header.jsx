import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const links = <>
        <Link to="/">Home</Link>
        <Link to="/addCoffee">Add Coffee</Link>
        <Link to="/users">Users</Link>

    </>
    return (
        <header className="mb-5 bg-[url('/public/images/more/15.jpg')] py-5 flex justify-between items-center px-5" >
            <div className='flex justify-center items-center'>
                <img className='w-10 mr-4' src="/public/images/more/logo1.png" alt="" />
                <p className='text-3xl text-white font-rancho'>Espresso Emporium</p>
                {/* import font from google and set up tailwind.config.js  */}
            </div>
            <div>
                <nav className='flex justify-center items-center gap-4 text-white'>
                    {links}
                </nav>
            </div>
            <div>
                <Link to="/auth/login">
                    <button className='btn btn-primary'>
                        Login
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;