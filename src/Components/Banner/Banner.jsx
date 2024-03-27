import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mt-12 h-[550px] rounded-3xl lg:flex justify-between items-center bg-[#1313130D] lg:px-[120px] px-6'>
            <div className='space-y-12'>
                <h1 className='text-6xl'>Books to freshen up your bookshelf</h1>
                <div>
                    <NavLink to={'/listed-books'}><button className="px-4 btn min-h-[44px] h-[44px] text-base font-medium py-2 rounded-lg hover:bg-[#38a028] bg-[#23BE0A] text-white">View The List</button></NavLink>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/r2k13p0/banner.png" alt="banner image book" />
            </div>
        </div>
    );
};

export default Banner;