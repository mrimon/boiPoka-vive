import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addItem } from '../../utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import { addWishlistToDB } from '../../utility/addWishlistToDB';

const BookDetails = () => {
    const { id } = useParams();
    const singleId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === singleId)
    const { bookId, bookName, image, author, rating, publisher, category, tags, yearOfPublishing, review, totalPages } = singleBook
    
    const handleMarkAsRead =(id)=> {
        // store with id 
        // where to store
        // array or collection
        // if the item already exist then show an alert
        // if the item not exist the push the item to the collection
        addItem(id)
        toast('Added To ReadList')
    }

    const handleAddToWishlist = (id) =>{
        addWishlistToDB(id)
        toast('Added to Wishlist')
    }
    return (
        <div className='flex gap-12 my-14'>
            <div className='bg-[#F3F3F3] rounded-2xl w-6/12'>
                <img className='w-[500px] p-[74px]' src={image} alt="" ></img>
            </div>
            <div className='text-[#131313] w-6/12'>
                <h1 className='text-[40px] font-bold'>{bookName}</h1>
                <p className='text-xl font-medium mb-6'>By: {author}</p>
                <div className="border-1 border-solid border-[#13131380]"></div>
                <p className='text-xl font-medium my-4'>{category}</p>
                <div className="border-1 border-solid border-[#13131380]"></div>
                <p className='my-6'><span className='font-bold'>Review:</span>{review}</p>
                <div className='flex items-center gap-5 mb-6'>
                    <h2 className="font-bold">Tags</h2>
                    {
                        tags.map((tag, index) =>
                            <span key={index} className='text-[#23BE0A] bg-gray-50 p-2 rounded-2xl font-medium'>#{tag}</span>
                        )
                    }
                </div>
                <div className="border-1 border-solid border-[#13131380]"></div>
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
                    <button onClick={()=> handleMarkAsRead(bookId)} className='btn'>Mark as Read</button>
                    <ToastContainer></ToastContainer>
                    <button onClick={()=> handleAddToWishlist(bookId)} className='btn bg-[#50B1C9] text-white'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;