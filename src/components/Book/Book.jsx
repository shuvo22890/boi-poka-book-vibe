import PropTypes from 'prop-types';
import star from '../../assets/imgs/star.png';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId, bookName, author, image, tags, category, rating} = book;

    return (
        <div className='border border-sec_bg rounded-xl p-3 sm:p-6 flex flex-col justify-between gap-5'>
            <div className='bg-sec_bg rounded-xl p-5 h-60'>
                <img src={image} alt={bookName} className='w-auto h-full mx-auto' />
            </div>

            <div className='flex gap-3'>
                {tags.map((tag, i)=><span
                    key={i}
                    className='bg-[#23BE0A0D] rounded-full px-4 py-1 text-base font-medium text-prime'
                >
                        {tag}
                </span>)}
            </div>

            <h3 className='font-bold text-2xl text-title'>{bookName}</h3>
            <p className='text-base font-semibold text-desc'>By: {author}</p>

            <div
                className='flex justify-between text-desc font-medium text-base border-t-2 border-[#13131326] border-dashed pt-5'
            >
                <span>{category}</span>
                <p className='flex gap-3 items-center'>
                    <span>{rating}</span>
                    <img src={star} alt='Star' />
                </p>
            </div>

            <Link to={`/books/${bookId}`} className='border border-prime text-prime font-bold px-5 py-2 rounded-lg text-center text-lg'>View Details</Link>
        </div>
    );
};

Book.propTypes = {
    bookId: PropTypes.string,
    book: PropTypes.object,
    bookName: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.array,
    category: PropTypes.string,
    rating: PropTypes.string
    
};

export default Book;