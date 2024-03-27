import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mk-munna/api-3/main/api.json')
            .then(Response => Response.json())
            .then(data => setBooks(data))
    }, [])
    // console.log('books', books);
    return (
        <div className='mt-14'>
            <h1 className='text-4xl text-center font-bold mb-12'>Books</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    books.map(book => {
                        return (
                            <Book key={book.bookId} book={book}></Book>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Books;