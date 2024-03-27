import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const booksLoad = useLoaderData()
    const books = JSON.parse(booksLoad); 
    const { id } = useParams()
    // console.log(id);
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    // console.log(book);
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleAddRead = () => {
        const getBooksFromBookList = () => {
            const storedBookList = localStorage.getItem('readList');
            if (storedBookList) {
                return JSON.parse(storedBookList);
            }
            return [];
        }
        const getBooksFromWishList = () => {
            const storedBookList = localStorage.getItem('wishList');
            if (storedBookList) {
                return JSON.parse(storedBookList);
            }
            return [];
        }
        const storedBookList = getBooksFromBookList();
        const storedWishList = getBooksFromWishList();
        const existingBookInWishList = storedWishList.find(bookId => bookId === id)
        const existingBookInReadList = storedBookList.find(bookId => bookId === id)
            if (!existingBookInReadList) {
                toast.success('Book added to read list')
                storedBookList.push(id);
                localStorage.setItem('readList', JSON.stringify(storedBookList));
                if (existingBookInWishList) {
                    storedWishList.splice(storedWishList.indexOf(id), 1);
                    localStorage.setItem('wishList', JSON.stringify(storedWishList));
                }
            } else {
                toast.error('Book already added to read list');
            }
    }
    const handleAddWish = () => {
        const getBooksFromBookList = () => {
            const storedBookList = localStorage.getItem('readList');
            if (storedBookList) {
                return JSON.parse(storedBookList);
            }
            return [];
        }
        const getBooksFromWishList = () => {
            const storedBookList = localStorage.getItem('wishList');
            if (storedBookList) {
                return JSON.parse(storedBookList);
            }
            return [];
        }
        const storedBookList = getBooksFromBookList();
        const storedWishList = getBooksFromWishList();
        const existingBookInWishList = storedWishList.find(bookId => bookId === id)
        const existingBookInReadList = storedBookList.find(bookId => bookId === id)
        if (!existingBookInReadList) {
            if (!existingBookInWishList) {
                toast.success('Book added to wish list')
                storedWishList.push(id);
                localStorage.setItem('wishList', JSON.stringify(storedWishList));
            }
            else {
                toast.error('Book already added to wish list');
            }
        }
        else {
            toast.error('Book already added to read list');
        }
        
    }
    return (
        <div className='flex flex-col lg:flex-row gap-6 my-20'>
            <div className='lg:w-[450px] w-[340px] mx-auto bg-base-200 flex justify-center items-center p-12 rounded-xl'>
                <img height={'250px'} width={'250px'} src={image} alt="" />
            </div>
            <div className='space-y-4 p-6 lg:p-0 lg:w-[600px] '>
                <h1 className='text-5xl'>{bookName}</h1>
                <h2>By : {author}</h2>
                <hr />
                <h2>{category}</h2>
                <hr />
                <h2>{review}</h2>
                <div className='flex gap-4'>
                    <span className='text-black font-bold items-center'>Tags</span>
                    <h2 className="text-sm flex gap-3">{tags.map((tag, index) => {
                        return (
                            <p key={index} className='text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1 rounded-xl text-center text-base'> #{tag}</p>
                        )
                    })}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-3/4 pt-2 leading-6 lg:leading-3">
                        {/* head */}
                        <thead>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Total Pages :</td>
                                <td className="font-bold"> {totalPages}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Publisher :</td>
                                <td className="font-bold">{publisher}</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Year of Publishing : </td>
                                <td className="font-bold">{yearOfPublishing}</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Rating :  </td>
                                <td className="font-bold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex gap-6 mt-8'>
                        <button onClick={() => { handleAddRead() }} className="px-4 btn min-h-[42px] h-[42px] py-[6px] rounded-lg hover:bg-[#49aeb9] hover:text-white border-[#59C6D2] border  text-black">Read</button>
                        <button onClick={()=>{handleAddWish()}} className="px-4 py-[6px] min-h-[42px] btn  h-[42px] rounded-lg bg-[#59C6D2] hover:bg-[#4aa8b3]  text-white">Wishlist</button>
                    </div>
                </div>
            <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;