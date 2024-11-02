import { useEffect, useState } from "react";
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }, [])

    return (
        <section>
            <h2 className='text-title text-4xl font-bold mb-9 text-center'>Books</h2>
            
            <div className="mb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-6">
                {books.map(book=><Book key={book.bookId} book={book} />)}
            </div>
        </section>
    );
};

export default Books;