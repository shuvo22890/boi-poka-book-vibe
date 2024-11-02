import PropTypes from 'prop-types';
import locationImg from '../../assets/imgs/location.png';
import publisherImg from '../../assets/imgs/publisher.png';
import pagesImg from '../../assets/imgs/page.png';
import { Link } from 'react-router-dom';

const SingleBook = ({book}) => {
    const {bookId, bookName, author, image, tags, yearOfPublishing, category, rating, publisher, totalPages} = book;

    return (
        <div className='border border-[#13131326] rounded-xl p-3 sm:p-6 flex flex-col md:flex-row gap-6 my-6'>
            <div className='w-full max-w-72 sm:m-0 h-72 rounded-xl bg-sec_bg px-2 py-7'>
                <img className='h-full mx-auto' src={image} alt={bookName} />
            </div>

            <div className='grow flex gap-4 md:gap-0 flex-col justify-between'>
                <h3 className='text-title text-2xl font-bold'>{bookName}</h3>
                <p className='text-desc font-medium text-base'>By: {author}</p>
                <p className='flex flex-wrap gap-1 sm:gap-3 text-title items-center'>
                    <strong>Tag </strong>
                    <>{
                        tags.map((tag, i)=><span
                            key={i}
                            className='bg-[#23BE0A0D] rounded-full px-3 sm:px-5 py-1 text- sm:text-base font-medium text-prime'>
                            #{tag}
                        </span>)
                    }</>
                </p>

                <p className='flex gap-2 items-center text-desc text-base'>
                    <img src={locationImg} />
                    <span>Year of Publishing: {yearOfPublishing}</span>
                </p>

                <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                    <p className='flex gap-2 items-center text-desc text-base'>
                        <img src={publisherImg} />
                        <span>Publisher: {publisher}</span>
                    </p>

                    <p className='flex gap-2 items-center text-desc text-base'>
                        <img src={pagesImg} />
                        <span>Page: {totalPages}</span>
                    </p>
                </div>

                <div className='border-t pt-4 text-sm sm:text-base flex flex-wrap gap-2 sm:gap-3 items-center'>
                    <span className='bg-[#328EFF26] px-3 sm:px-5 py-2 rounded-full text-[#328 text-smEsm:FF]'>
                        Category: {category}
                    </span>

                    <span className='bg-[#FFAC3326] px-3 sm:px-5 py-2 rounded-full text-[#FFA text-smCsm:33]'>
                        Rating: {rating}
                    </span>

                    <Link to={`/books/${bookId}`} className='bg-prime px-3 sm:px-5 py-2 rounded-full text-white text-sm sm:text-lg font-medium'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

SingleBook.propTypes = {
    book: PropTypes.object
}

export default SingleBook;