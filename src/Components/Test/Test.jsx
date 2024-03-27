import React, { useState, useEffect } from 'react';
import './test.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [disable, setDisable] = useState(false);
    const [dotsShown, setDotsShown] = useState(0);

    useEffect(() => {
        // Start the interval to show dots continuously
        const interval = setInterval(() => {
            setDotsShown((prevDotsShown) => (prevDotsShown + 1) % 4); // Assuming 4 dots, adjust as needed
        }, 700); // Adjust the interval duration as needed

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('name', name);
        console.log('email', email);
        console.log('phone', phone);
        console.log('message', message);

        if (name === '' || email === '' || phone === '' || message === '') {
            setError('Please write your message');
        }
    };

    return (
        <div className='lg:mt-20 lg:mb-28 mt-6 mx-auto lg:w-[1000px]'>
            <h1 className='text-8xl font-playFairDisplay font-bold'>Here to <span className="help">help
                {[...Array(3)].map((mk, index) => (
                    <span key={index} className={`dot${index < dotsShown ? ' show' : ''}`}></span>
                ))}
            </span></h1>
            <div className='mt-20 flex flex-col gap-28 lg:flex-row'>
                <form onSubmit={handleSubmit} className='w-[340px] lg:w-[600px]'>
                    {/* Form fields */}
                </form>
                <div className='space-y-8'>
                    {/* Newsletter section */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
