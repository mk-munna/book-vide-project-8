import React from 'react';
import {  useLoaderData } from 'react-router-dom';
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

    return (
        <div className='my-12'>
            <div>
                <h1 className='font-semibold text-3xl bg-base-200 h-20 rounded-xl flex justify-center items-center'>Listed Books</h1>
            </div>
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab"  className="tab text-base" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8">
                    {
                        readListedBooks.map(book => {
                            return (
                                <DisplayReadBooksAndWishlistBooks
                                    book={book}
                                    key={book.bookId}
                                ></DisplayReadBooksAndWishlistBooks>
                            )
                        })
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" defaultChecked className="tab text-base p-6" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8">
                    {
                        wishListedBooks.map(book => {
                            return (
                                <DisplayReadBooksAndWishlistBooks
                                    book={book}
                                    key={book.bookId}
                                ></DisplayReadBooksAndWishlistBooks>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;