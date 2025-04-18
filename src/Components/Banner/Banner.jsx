import React from 'react';
import bookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero  bg-base-200 min-h-screen justify-around rounded-2xl my-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImage}
                    className="max-w-sm rounded-lg shadow-2xl h-[500px]" />
                <div className='w-[526px]'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] hover text-white text-xl font-bold mt-5 py-4 px-7">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;