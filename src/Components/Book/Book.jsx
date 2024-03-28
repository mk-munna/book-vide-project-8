import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    // console.log(book);
    const { bookId, bookName, author, image, rating, category, tags, } = book;
    // console.log(tags);
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card  bg-base-100 border p-4">
                    <figure className='bg-base-200 p-6'><div className='w-[170px] h-[170px]'><img src={image} /></div></figure>
                    <div className="card-body space-y-2">
                        <h2 className="text-sm flex gap-3">{tags.map((tag, index) => {
                            return (
                                <p key={index} className='text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1 rounded-xl text-center text-base'>{tag}</p>
                            )
                        })}</h2>
                        <p className='text-2xl font-medium'>{bookName}</p>
                        <p className='text-sm'>{author}</p>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='text-base font-medium'>{category}</p>
                            <p className='flex items-center gap-1'>{rating} <CiStar />
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;