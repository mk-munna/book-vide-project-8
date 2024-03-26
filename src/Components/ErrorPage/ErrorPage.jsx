import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col items-center gap-6 justify-center text-center'>
            <h1 className='text-7xl'>Opps!</h1>
            <h2 className='text-3xl'>Something Went Wrong</h2>
            <Link to={'/'} className='border px-4 py-1 rounded-xl mt-4'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;
