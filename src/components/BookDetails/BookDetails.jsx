import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {storeToDB} from '../../utility/storeToDB';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const {bookId} = useParams();
    const [details, setDetails] = useState({});

    useEffect(()=>{
        fetch('/booksData.json')
        .then(res=>res.json())
        .then(data=>{
            const id = parseInt(bookId);
            const detail = data.find(el=>el.bookId===id);
            setDetails(detail);
        })
    }, [bookId]);

    const {image, bookName, author, review, totalPages, rating, category,
    tags, publisher, yearOfPublishing} = details;

    return (<>
    <ToastContainer position="top-center" />
    {details ? <article className='max-w-screen-xl mx-auto px-2 md:flex gap-5 lg:gap-12 mb-10 items-center'>
        <div className='basis-1/2 p-5 lg:p-16 bg-[#1313130D] rounded-xl mb-10 md:m-0'>
            <img src={image} alt={bookName} className='h-full max-h-screen w-full object-contain mx-auto' />
        </div>

        <div className='basis-1/2 flex flex-col justify-between gap-4'>
            <h2 className='font-bold text-4xl text-title'>{bookName}</h2>
            <p className='text-desc text-xl font-medium'>By: {author}</p>
            <p className='text-desc text-xl font-medium border-y py-4'>{category}</p>
            <p className='text-sm lg:text-base text-desc'><strong className='text-title'>Review: </strong>{review}</p>
            <div className='flex gap-3 text-base items-center'>
                <strong>Tag</strong> {tags && tags.map((tag, i)=><span
                    key={i}
                    className='bg-[#23BE0A0D] rounded-full px-4 py-1 font-medium text-prime'
                >
                    #{tag}
                </span>)}
            </div>

            <div className='text-desc border-t pt-4 text-base'>
                <p className='flex mb-2 lg:mb-4'>
                    <span className='w-full max-w-40 sm:max-w-48'>Number of page: </span>
                    <strong className="text-title">{totalPages}</strong>
                </p>

                <p className='flex mb-2 lg:mb-4'>
                    <span className='w-full max-w-40 sm:max-w-48'>Publisher: </span>
                    <strong className="text-title">{publisher}</strong>
                </p>

                <p className='flex mb-2 lg:mb-4'>
                    <span className='w-full max-w-40 sm:max-w-48'>Year of Publishing: </span>
                    <strong className="text-title">{yearOfPublishing}</strong>
                </p>

                <p className='flex mb-3 lg:mb-5'>
                    <span className='w-full max-w-40 sm:max-w-48'>Rating: </span>
                    <strong className="text-title">{rating}</strong>
                </p>

                <div>
                    <button
                        className='border bg-white border-second rounded-xl px-4 sm:px-7 py-3 text-sm sm:text-lg font-semibold text-second'
                        onClick={()=>storeToDB('read', bookId)}
                    >
                        Mark As Read
                    </button>

                    <button
                        className='border bg-second border-second rounded-xl px-4 sm:px-7 py-3 text-sm sm:text-lg font-semibold text-white ml-2'
                        onClick={()=>storeToDB('wishlist', bookId)}
                    >
                        Add To Wishlist
                    </button>
                </div>
            </div>
        </div>
    </article> : <Navigate to="/" />}</>);
};

export default BookDetails;