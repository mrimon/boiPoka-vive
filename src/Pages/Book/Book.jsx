import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, bookName, image, author, rating, category, tags, yearOfPublishing } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card p-6 shadow-sm">
                <figure className='bg-[#F3F3F3] rounded-2xl'>
                    <img className='md:h-[166px] py-8'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-[#131313]">
                    <div className='space-x-3 mb-2'>
                        {
                            tags.map((tag, index) =>
                                <span key={index} className='text-[#23BE0A] bg-gray-50 p-2 rounded-2xl font-medium text-lg'>{tag}</span>
                            )
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p className=' font-medium'>By: {author}</p>
                    <div className='border-1 border-dashed border-gray-300'></div>
                    <div className="card-actions justify-between">
                        <span className='font-medium'>{category}</span>
                        <div className='flex gap-1 font-medium'>
                            <span>{rating}</span>
                            <Star size={20}></Star>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Link>
    );
};

export default Book;