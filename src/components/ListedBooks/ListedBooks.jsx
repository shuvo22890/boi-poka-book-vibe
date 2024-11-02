import { useCallback, useEffect, useRef, useState } from "react";
import {getData} from '../../utility/storeToDB';
import SingleBook from "./SingleBook";
import angle from '../../assets/imgs/angle.png';
import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const booksData = useLoaderData();
    const dropdownRef = useRef();

    const getArchivedBooks = useCallback((key, setState) => {
        const read = getData(key);
        if(!read.length)return;
        const storedRead = read.map(id=>parseInt(id));
        const filterRead = booksData.filter(({bookId})=>storedRead.includes(bookId));
        setState(filterRead);
    }, [booksData]);

    useEffect(()=>{
        getArchivedBooks('read', setReadBooks);
        getArchivedBooks('wishlist', setWishlist);
    }, [getArchivedBooks]);

    const handleSort = e => {
        const {target} = e;
        if(target.tagName!=='BUTTON')return;
        const {id} = target;

        const filterRating = [...readBooks].sort((a, b)=> b[id] - a[id]);
         setReadBooks(filterRating);

        dropdownRef.current.removeAttribute('open');
    }

    return (
        <div className="max-w-screen-xl mx-auto px-2">
            <h2 className="text-3xl font-bold text-center py-9 bg-sec_bg rounded-xl">Listed Books</h2>

            <div className="my-10 text-center">
                <details ref={dropdownRef} className="dropdown">
                    <summary className="btn m-1 bg-prime text-white text-lg font-semibold">
                        <span className="pr-5">Sort By</span>
                        <img src={angle} />
                    </summary>
                    <ul onClick={handleSort} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-prime text-lg">
                        <li><button id="rating">Rating</button></li>
                        <li><button id="totalPages">Number of Pages</button></li>
                        <li><button id="yearOfPublishing">Publishing Year</button></li>
                    </ul>
                </details>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab [--tab-border-color:#1313134d] min-w-36"
                    aria-label="Read Books"
                    defaultChecked
                />
                <div role="tabpanel" className="tab-content border-t-[#1313134d]">
                    {readBooks.length ? <>{
                    readBooks.map(book=><SingleBook book={book} key={book.bookId}/>)
                    }</>
                    :
                    <h3 className="text-center text-4xl my-10">
                        No Book Marked as read!
                    </h3>}
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab [--tab-border-color:#1313134d] min-w-36"
                    aria-label="Wishlist Books"
                />
                <div role="tabpanel" className="tab-content border-t-[#1313134d]">
                {wishlist.length ? <>{
                    wishlist.map(book=><SingleBook book={book} key={book.bookId}/>)
                    }</>
                    :
                    <h3 className="text-center text-4xl my-10">
                        No Book Marked as read!
                    </h3>}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;