import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-9 mt-15'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15'>
                <Suspense fallback={<h1>Loading......</h1>}>
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;