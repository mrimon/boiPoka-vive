import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    const link = <>
        {/* <Link to='/'><li className='m-3 text-lg'>Home</li></Link> */}
        {/* <Link to='/listedBooks'><li className='m-3 text-lg'>Listed Books</li></Link> */}
        <NavLink to='/'>
            {({ isActive }) => (
                <span className={`${isActive ? 'active' : ''}  text-lg px-4 py-2 hover`}>Home</span>
            )}
        </NavLink>
        <NavLink to='/listedBook'>
            {({ isActive }) => (
                <span className={`${isActive ? 'active' : ''} text-lg px-4 py-2 hover`}>Listed Books</span>
            )}
        </NavLink>
        <NavLink to='/pagesToRead'>
            {({ isActive }) => (
                <span className={`${isActive ? 'active' : ''} text-lg px-4 py-2 hover`}>Pages To Read</span>
            )}
        </NavLink>
    </>
    return (
        <div className="navbar my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}

                    </ul>
                </div>
                <a className="btn text-3xl font-bold px-4 py-5 bg-transparent border-transparent hover:border-2 hover:border-black ">Boi POka</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {link}

                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <a className="btn bg-[#23BE0A] text-white hover">Sign In</a>
                <a className="btn bg-[#50B1C9] text-white hover:bg-transparent hover:border-2 hover:border-[#50b1c9] hover:text-[#50b1c9]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;