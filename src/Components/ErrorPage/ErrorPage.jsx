import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col items-center  justify-center text-center'>
            <h3 className='text-6xl font-bold text-[#FF9606]'>WHOOOS!!!</h3>
            <h1 className='text-[300px]  text-[#FF9606] font-bold  -mt-16'>404</h1>
                <h2 className='text-4xl shadow-md absolute top-2/4 p-1 font-semibold mx-auto bg-white  '>THE PAGE CAN NOT BE FOUND</h2>
            <Link to={'/'} className='border border-[#FF9606] px-4 py-1 -mt-12 rounded-sm shadow-xl hover:bg-[#FF9606] hover:text-white '>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;
