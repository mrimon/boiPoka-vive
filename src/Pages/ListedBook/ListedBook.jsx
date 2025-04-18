import React, { useEffect, useState } from 'react';
import { Link, useLoaderData} from 'react-router';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredItem, removeItemFromDB } from '../../utility/addToDB';
import { ChevronDown, FileText, MapPin, UsersRound } from 'lucide-react';
import { getStoredWishlist } from '../../utility/addWishlistToDB';

const ListedBook = () => {
    const data = useLoaderData()
    const [readList, setReadList] = useState([])
    const [wishlist, setWishlist] = useState([])
    
    const [sort, setSort] = useState('')

    useEffect(() => {
        const storedList = getStoredItem();
        const convertedStoredList = storedList.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredList.includes(book.bookId));
        setReadList(myReadList)
    }, [])

    const handleSort = (type) => {
        setSort(type)
        if (type === 'pages') {
            const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages)
            setWishlist(sortedByPages)
        }
        if (type === 'ratings') {
            const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortedByRatings)
            setWishlist(sortedByRatings)
        }
    }

    useEffect(() => {
        const storedWishList = getStoredWishlist();
        const convertedWishlist = storedWishList.map(id => parseInt(id))
        const myWishlist = data.filter(book => convertedWishlist.includes(book.bookId));
        setWishlist(myWishlist)
    }, []);


    const handleRemoveItem = (id) => {
        // const removedId = removeItemFromDB(id)
        // console.log(removedId);
        // const remainingList = readList.filter(item => item.bookId !== removedId)
        // setReadList(remainingList)
        // const remaingStoreIds = removeItemFromDB(id)
        // const remainingList = [];
        // const itemId = readList.bookId
        // if(itemId.includes(remaingStoreIds)){

        //     remainingList.push(itemId)
        //     setReadList(remainingList)
        // }
    }

    
    return (
        <div>
            <div className='bg-[#13131305] py-8 text-center rounded-4xl '>
                <h1 className='text-3xl font-bold'>Books</h1>
            </div>
            <div className='my-8 text-center'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white hover">Sort By {sort ? sort : <ChevronDown></ChevronDown>} </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('pages')} className='hover'><a>Pages</a></li>
                        <li onClick={() => handleSort('ratings')} className='hover'><a>Ratings</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab style={{ fontSize: '18px' }}>Read List {readList.length}</Tab>
                    <Tab style={{ fontSize: '18px' }}>My Wishlist {wishlist.length}</Tab>
                </TabList>
                <TabPanel>

                    {
                        readList.map(book =>
                            <div className='flex gap-12 my-14 p-6 border border-[#13131380] rounded-3xl'>
                                <div className='bg-[#F3F3F3] rounded-2xl w-[250px]'>
                                    <img className='w-[200px] m-auto py-7 px-12' src={book.image} alt="" ></img>
                                </div>
                                <div className='text-[#131313] w-full'>
                                    <h1 className='text-xl font-bold'>{book.bookName}</h1>
                                    <p className=' font-medium my-4'>By: {book.author}</p>
                                    <div className='flex items-center gap-5 mb-4'>
                                        <h2 className="font-bold">Tags</h2>
                                        {
                                            book.tags.map((tag, index) =>
                                                <span key={index} className='text-[#23BE0A] bg-gray-50 p-2 rounded-2xl font-medium'>#{tag}</span>
                                            )
                                        }
                                        <p className='flex gap-1'><MapPin></MapPin><span>Year of Publlishing:  {book.yearOfPublishing}</span></p>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <p className='flex gap-1'><UsersRound size={20}></UsersRound><span>Publisher:{book.publisher}</span></p>
                                        <p className='flex gap-1'><FileText size={20}></FileText><span>Page {book.totalPages}</span></p>
                                    </div>
                                    <div className="border-1 mb-4 border-solid border-[#13131380]"></div>

                                    <div className='space-x-4 font-medium'>
                                        <button className='btn text-[#328EFF] bg-[#328EFF20] rounded-4xl'>Category: {book.category}</button>
                                        <button className='btn text-[#FFAC33] bg-[#FFAC3320] rounded-4xl'>Rating: {book.rating}</button>
                                        <Link to={`/bookDetails/${book.bookId}`}>
                                            <button className='btn bg-[#23BE0A] text-white rounded-4xl'>View Details</button>
                                        </Link>
                                        <button onClick={() => handleRemoveItem(book.bookId)} className='btn btn-error'>X</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishlist.map(book =>
                            <div className='flex gap-12 my-14 p-6 border border-[#13131380] rounded-3xl'>
                                <div className='bg-[#F3F3F3] rounded-2xl w-[250px]'>
                                    <img className='w-[200px] m-auto py-7 px-12' src={book.image} alt="" ></img>
                                </div>
                                <div className='text-[#131313] w-full'>
                                    <h1 className='text-xl font-bold'>{book.bookName}</h1>
                                    <p className=' font-medium my-4'>By: {book.author}</p>
                                    <div className='flex items-center gap-5 mb-4'>
                                        <h2 className="font-bold">Tags</h2>
                                        {
                                            book.tags.map((tag, index) =>
                                                <span key={index} className='text-[#23BE0A] bg-gray-50 p-2 rounded-2xl font-medium'>#{tag}</span>
                                            )
                                        }
                                        <p className='flex gap-1'><MapPin></MapPin><span>Year of Publlishing:  {book.yearOfPublishing}</span></p>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <p className='flex gap-1'><UsersRound size={20}></UsersRound><span>Publisher:{book.publisher}</span></p>
                                        <p className='flex gap-1'><FileText size={20}></FileText><span>Page {book.totalPages}</span></p>
                                    </div>
                                    <div className="border-1 mb-4 border-solid border-[#13131380]"></div>

                                    <div className='space-x-4 font-medium'>
                                        <button className='btn text-[#328EFF] bg-[#328EFF20] rounded-4xl'>Category: {book.category}</button>
                                        <button className='btn text-[#FFAC33] bg-[#FFAC3320] rounded-4xl'>Rating: {book.rating}</button>
                                        <Link to={`/bookDetails/${book.bookId}`}>
                                            <button className='btn bg-[#23BE0A] text-white rounded-4xl'>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;