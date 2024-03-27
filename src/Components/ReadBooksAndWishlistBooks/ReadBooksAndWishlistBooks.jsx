import React from 'react';
import { FiUsers } from "react-icons/fi";
import { IoBookmarksOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";

const DisplayReadBooksAndWishlistBooks = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div className='border lg:w-full w-[290px] rounded-2xl mb-6 px-6'>
                <div className='flex flex-col lg:flex-row gap-6 my-10'>
                    <div className='p-6 flex justify-center items-center w-[240px] h-[240px] bg-base-200 rounded-xl'><img src={image} alt="" /></div>
                    <div className='space-y-4'>
                        <h1 className='text-2xl'>{bookName}</h1>
                        <p className='text-sm '>By : {author}</p>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <span className='text-black font-bold items-center'>Tags</span>
                            <h2 className="text-sm flex flex-col lg:flex-row gap-3">{tags.map((tag, index) => {
                                return (
                                    <p key={index} className='text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1 rounded-xl text-center text-base'> #{tag}</p>
                                )
                            })}</h2>
                            <p className='text-sm flex items-center gap-4'><SlCalender /> Published Year : {yearOfPublishing}</p>
                        </div>
                        <div className='flex gap-8'>
                            <p className='flex items-center gap-3'><FiUsers />
                                Publisher : {publisher}
                            </p>
                            <p className='flex items-center gap-3'>
                                <IoBookmarksOutline className='mt-[2px]' />
                                Page : {totalPages}
                            </p>
                        </div>
                        <hr />
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <button className='px-4 py-2 rounded-full bg-[#328EFF26] text-[#328EFF] cursor-auto'>Category : {category} </button>
                            <button className='px-4 py-2 rounded-full bg-[#FFAC3326] text-[#FFAC33] cursor-auto'>Rating : {rating} </button>
                            <NavLink to={`/book/${bookId}`}><button className='btn w-full min-h-1 h-[42px] px-4 py-2 rounded-full bg-[#23BE0A] text-white text-base hover:bg-[#348a26]'>View Details </button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayReadBooksAndWishlistBooks;