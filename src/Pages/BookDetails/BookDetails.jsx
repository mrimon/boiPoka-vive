import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addItem } from '../../utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import { addWishlistToDB } from '../../utility/addWishlistToDB';

const BookDetails = () => {
    const { id } = useParams();
    const singleId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === singleId);
    const { bookId, bookName, image, author, rating, publisher, category, tags, yearOfPublishing, review, totalPages } = singleBook;

    const [isRead, setIsRead] = useState(false); 

    const handleMarkAsRead = (id) => {
        if (!isRead) {
            addItem(id);
            toast(' Added to Read List');
            setIsRead(true); 
        }
    };

    const handleAddToWishlist = (id) => {
        addWishlistToDB(id);
        toast('🌟 Added to Wishlist');
    };

    return (
        <div className='flex gap-12 my-14'>
            <div className='bg-[#F3F3F3] rounded-2xl w-6/12'>
                <img className='w-[500px] p-[74px]' src={image} alt="" />
            </div>
            <div className='text-[#131313] w-6/12'>
                <h1 className='text-[40px] font-bold'>{bookName}</h1>
                <p className='text-xl font-medium mb-6'>By: {author}</p>
                <div className="border border-[#13131380] my-2"></div>
                <p className='text-xl font-medium my-4'>{category}</p>
                <p className='my-6'><span className='font-bold'>Review:</span> {review}</p>
                <div className='flex items-center gap-5 mb-6'>
                    <h2 className="font-bold">Tags</h2>
                    {tags.map((tag, index) =>
                        <span key={index} className='text-[#23BE0A] bg-gray-50 p-2 rounded-2xl font-medium'>#{tag}</span>
                    )}
                </div>
                <div className="border border-[#13131380] my-2"></div>
                <div className='flex gap-10 mt-6 mb-8'>
                    <div>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className='font-medium'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>

               
                <div className='space-x-4 flex'>
                    <button
                        onClick={() => handleMarkAsRead(bookId)}
                        disabled={isRead}
                        className={`btn px-5 py-2 rounded-lg font-semibold 
                            ${isRead
                                ? 'bg-green-600 text-white cursor-not-allowed'
                                : 'bg-gray-200 hover:bg-green-500 hover:text-white'}
                        `}
                    >
                        {isRead ? 'Already Read' : 'Mark as Read'}
                    </button>

                    <ToastContainer />

                    <button
                        onClick={() => handleAddToWishlist(bookId)}
                        className='btn bg-[#50B1C9] text-white px-5 py-2 rounded-lg font-semibold'
                    >
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;