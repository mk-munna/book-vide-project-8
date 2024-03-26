import React from 'react';

const Banner = () => {
    return (
        <div className='mt-6 h-[550px] rounded-3xl lg:flex justify-between items-center bg-[#1313130D] lg:px-[120px] px-6'>
            <div className='space-y-12'>
                <h1 className='text-6xl'>Books to freshen up your bookshelf</h1>
                <button className="px-4 py-2 rounded-lg bg-[#23BE0A] text-white">View The List</button>
            </div>
            <div>
                <img src="https://i.ibb.co/r2k13p0/banner.png" alt="banner image book" />
            </div>
        </div>
    );
};

export default Banner;