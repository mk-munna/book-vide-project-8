import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayReadBooksAndWishlistBooks from '../ReadBooksAndWishlistBooks/ReadBooksAndWishlistBooks';
const ListedBooks = () => {
    const listedBooks = useLoaderData()
    // console.log(listedBooks);
    const getBooksFromBookList = () => {
        const storedBookList = localStorage.getItem('readList');
        if (storedBookList) {
            return storedBookList;
        }
        return [];
    }
    const readListId = getBooksFromBookList();
    const readListedBooks = listedBooks.filter(book => readListId.includes(book.bookId));
    // console.log('list main', readListedBooks);
// readList-----------------------------------------------------
    const sortedReadByRating = [...readListedBooks].sort((a, b) => b.rating - a.rating);
    console.log('rating', sortedReadByRating);
    //sort by total page
    const sortedReadByTotalPage = [...readListedBooks].sort((a, b) => b.totalPages - a.totalPages);
    console.log('page', sortedReadByTotalPage);
    //sort by published year
    const sortedReadByPublishYear = [...readListedBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    console.log('year', sortedReadByPublishYear);
    //----------------------------------------------------
    const getBooksFromWishList = () => {
        const storedBookList = localStorage.getItem('wishList');
        if (storedBookList) {
            return storedBookList;
        }
        return [];
    }
    const wishListId = getBooksFromWishList();
    const wishListedBooks = listedBooks.filter(book => wishListId.includes(book.bookId));
    // wishlist sort-------------------
    const sortedWishByRating = [...wishListedBooks].sort((a, b) => b.rating - a.rating);
    //sort by total page
    const sortedWishByTotalPage = [...wishListedBooks].sort((a, b) => b.totalPages - a.totalPages);
    //sort by published year
    const sortedWishByPublishYear = [...wishListedBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);


    const [showDataRead, setShowDataRead] = useState(false)
    const [showDataWish, setShowDataWish] = useState(false)
    useEffect(() => {
        if (readListId.length > 0) {
            // console.log('available read list');
            setShowDataRead(true)
            // console.log(readListId);
        }
        if (wishListId.length === 0) {
            console.log('empty wishlist');
            console.log(wishListId);
        } else {
            console.log('available wishlist');
            console.log(wishListId);
            const storedBookList = localStorage.getItem('wishList')
            const list = JSON.parse(storedBookList);
            if (list.length > 0) {
                setShowDataWish(true)
            }
        }
    }, [])
    const [defaultList , setDefaultList] = useState(true);
    const [rating, setRating] = useState(false);
    const [totalPages, setTotalPages] = useState(false);
    const [yearOfPublishing, setYearOfPublishing] = useState(false);
    console.log('default',defaultList);
    console.log('rating',rating);
    console.log('totalPages',totalPages);
    console.log('yearOfPublishing', yearOfPublishing);
    console.log('main', readListedBooks);
    return (
        <div className='my-12'>
            <div>
                <h1 className='font-semibold text-3xl bg-base-200 h-20 rounded-xl flex justify-center items-center'>Listed Books</h1>
            </div>
            <div className='flex justify-center mt-6'>
                <select className="border select focus:outline-none focus:border-green-400 rounded-xl border-green-400 hover:outline-none selection:outline-none w-42 max-w-xs" onChange={(e) => {
                    const selectedOption = e.target.value;
                    if (selectedOption === 'Rating') {
                        setRating(true);
                        setTotalPages(false);
                        setYearOfPublishing(false);
                        setDefaultList(false)
                    } else if (selectedOption === 'Number of Page') {
                        setRating(false);
                        setTotalPages(true);
                        setYearOfPublishing(false);
                        setDefaultList(false)
                    } else if (selectedOption === 'Published Year') {
                        setRating(false);
                        setTotalPages(false);
                        setYearOfPublishing(true);
                        setDefaultList(false)
                    }
                }}>
                    <option>Sort By</option>
                    <option>Rating</option>
                    <option>Number of Page</option>
                    <option>Published Year</option>
                </select>
            </div>

            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" defaultChecked className="tab text-base" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8">
                    {
                        showDataRead ? (
                            <div>
                                <div>
                                    {

                                        defaultList && (
                                            readListedBooks.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                                <div>
                                    {

                                        rating && (
                                            sortedReadByRating.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                                <div>
                                    {

                                        totalPages && (
                                            sortedReadByTotalPage.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                                <div>
                                    {

                                        yearOfPublishing && (
                                            sortedReadByPublishYear.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                            </div>
                            
                        ) : (
                            <div className='text-3xl text-gray-400 flex items-center ml-12 h-52'>No Read Books</div>
                        )
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-base p-6" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8">
                    {
                        showDataWish ? (
                            <div>
                                <div>
                                    {
                                        defaultList && (
                                            wishListedBooks.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                                <div>
                                    {

                                        rating && (
                                            sortedWishByRating.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                                <div>
                                    {

                                        totalPages && (
                                            sortedWishByTotalPage.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                                <div>
                                    {

                                        yearOfPublishing && (
                                            sortedWishByPublishYear.map(book => {
                                                return (
                                                    <DisplayReadBooksAndWishlistBooks
                                                        book={book}
                                                        key={book.bookId}
                                                    ></DisplayReadBooksAndWishlistBooks>
                                                )
                                            })
                                        )
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className='text-3xl text-gray-400 flex items-center ml-12 h-52'>No Wishlist Books</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;