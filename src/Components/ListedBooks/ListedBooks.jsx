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
    // console.log(readListId,readListedBooks);
    const getBooksFromWishList = () => {
        const storedBookList = localStorage.getItem('wishList');
        if (storedBookList) {
            return storedBookList;
        }
        return [];
    }
    const wishListId = getBooksFromWishList();
    const wishListedBooks = listedBooks.filter(book => wishListId.includes(book.bookId));



    const [showDataRead, setShowDataRead] = useState(false)
    const [showDataWish, setShowDataWish] = useState(false)
    useEffect(() => {
        if (readListId.length === 0) {
            console.log('empty read list');
            console.log(readListId);
        } else {
            console.log('available read list');
            setShowDataRead(true)
            console.log(readListId);
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

    return (
        <div className='my-12'>
            <div>
                <h1 className='font-semibold text-3xl bg-base-200 h-20 rounded-xl flex justify-center items-center'>Listed Books</h1>
            </div>
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" defaultChecked className="tab text-base" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8">
                    {
                        showDataRead ? (
                            readListedBooks.map(book => {
                                return (
                                    <DisplayReadBooksAndWishlistBooks
                                        book={book}
                                        key={book.bookId}
                                    ></DisplayReadBooksAndWishlistBooks>
                                )
                            })
                        ) : (
                            <div className='text-3xl text-gray-400 flex items-center ml-12 h-52'>No Read Books</div>
                        )
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-base p-6" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8">
                    {
                        showDataWish ? (wishListedBooks.map(book => {
                            return (
                                <DisplayReadBooksAndWishlistBooks
                                    book={book}
                                    key={book.bookId}
                                ></DisplayReadBooksAndWishlistBooks>
                            )
                        })) : (
                            <div className='text-3xl text-gray-400 flex items-center ml-12 h-52'>No Wishlist Books</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;