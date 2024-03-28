import React, { useState } from 'react';
import './contact.css'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
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
            <h1 className=' text-8xl font-playFairDisplay font-bold'>Here to <span className="help">help...</span></h1>
            <div className='mt-20  flex flex-col  gap-28  lg:flex-row'>
                <form onSubmit={handleSubmit} className='w-[340px] mx-auto lg:w-[600px]'>
                    <p className='mb-2 font-semibold'>Name*</p>
                    <input defaultValue={name} required onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Your name" name="name" className="bg-gray-100 px-6 py-[14px] rounded-md focus:outline-none w-[350px] max-w-xs" />
                    <br />
                    <br />
                    <p className='mb-2 font-semibold'>Email*</p>
                    <input required onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Your email" name="email" className="bg-gray-100 px-6 py-[14px] rounded-md focus:outline-none w-[350px] max-w-xs" />
                    <br />
                    <br />
                    <p className='mb-2 font-semibold'>Phone*</p>
                    <input required onChange={(e) => { setPhone(e.target.value) }} type="text" placeholder="Your phone" name="phone" className="bg-gray-100 px-6 py-[14px] rounded-md focus:outline-none w-[350px] max-w-xs" />
                    <br />
                    <br />
                    <p className='mb-2 font-semibold'>Message*</p>
                    <textarea rows={6} cols={5} onChange={e => setMessage(e.target.value)} placeholder="Your message" name="phone" className=" bg-gray-100 px-6 py-[14px] rounded-md focus:outline-none w-[350px] max-w-xs"></textarea>
                    {error && <p className="text-red-500">{error}</p>}
                    <button className='block mt-4'><img src="https://i.ibb.co/MSZ88bt/Screenshot-2024-03-27-224812-removebg-preview.png" alt="" /></button>
                </form>
                <div className='space-y-8'>
                    <h2 className='font-playFairDisplay text-5xl text-center lg:text-left font-semibold'>Join our newsletter</h2>
                    <p className='lg:text-left text-center'>Stay up-to-date with the latest literary releases by joining our newsletter. As a book lover, you'll gain access to a wealth of exciting content delivered straight to your inbox. </p>
                    <div className='w-[300px] lg:w-full  mx-auto '>
                        <p className='mb-3 font-semibold'>Email Address</p>
                        <input className='bg-gray-100 px-6 py-3 rounded-md focus:outline-none' type="text" placeholder='Enter your email here..' name="" id="" />
                        <button className='block mt-4'><img src="https://i.ibb.co/jkqjCWH/Screenshot-2024-03-27-224801-removebg-preview.png" alt="" /></button>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-16'>
                        <div className='w-[280px] mx-auto lg:mx-0 px-6 lg:px-0'>
                            <h3 className='font-semibold text-center lg:text-left'>Category</h3>
                            <div className='mt-2 text-center lg:text-left'>
                                <span className='mr-4'>#Fantasy</span>
                                <span className='mr-4'>#Fiction</span>
                                <span className='mr-4'>#Young Adult</span> <br />
                                <span className='mr-4'>#Science Fiction</span>
                            </div>
                            <h3 className='font-semibold mt-4 lg:text-left text-center'>Legal</h3>
                            <div className='mt-2 lg:text-left text-center'>
                                <span className='mr-4 hover:underline cursor-pointer'>Terms of use</span>
                                <span className='mr-4 hover:underline cursor-pointer'>Privacy policy</span>
                                <span className='mr-4 hover:underline cursor-pointer'>Cookie policy</span> <br />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-semibold text-center lg:text-left'>Alternative contact of us</h3>
                            <div className='mt-2 space-y-2 text-center lg:text-left lg:pb-0 pb-6'>
                                <p>info@mkmunna.com</p>
                                <p>+2535445(546)6</p>
                                <p>Lewa House Pimibi Ltd.</p>
                                <p>Po. Box 760</p>
                                <p>Isiolo</p>
                                <p>60300</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;