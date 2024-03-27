import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {

    return (
        <div className='lg:mt-10 mt-6' style={{
            fontFamily: "Work Sans"
        }}>
            <div className="navbar bg-base-100">
                <div className="navbar-start w-[230px] lg:w-[500px]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[150px]">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/Listed-Books'}>Listed Books</NavLink>
                            <NavLink to={'/Pages-to-Read'}>Pages to Read</NavLink>
                            <NavLink to={'/famous-author'}>Famous Author</NavLink>
                            <NavLink to={'/contact'}>Contact us</NavLink>
                        </ul>
                    </div>
                    <p className=" text-2xl font-bold ">MK BookStore</p>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-6 text-base">
                        <NavLink className="hover:border-b border-green-500" to={'/'}>Home</NavLink>
                        <NavLink className="hover:border-b border-green-500" to={'/Listed-Books'}>Listed Books</NavLink>
                        <NavLink className="hover:border-b border-green-500" to={'/Pages-to-Read'}>Pages to Read</NavLink>
                        <NavLink className="hover:border-b border-green-500" to={'/famous-author'}>Famous Authors</NavLink>
                        <NavLink className="hover:border-b border-green-500" to={'/contact'}>Contact Us</NavLink>
                    </ul> 
                </div>
                <div className="lg:navbar-end gap-4">
                    <button className="px-4 py-[6px] rounded-lg bg-[#23BE0A] text-white">Sign In</button>
                    <button className="bg-[#59C6D2]  hidden lg:block py-[6px] rounded-lg text-white px-4">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;