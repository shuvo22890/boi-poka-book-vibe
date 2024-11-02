import bookImg from '../../assets/imgs/book.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (<section className="hero bg-sec_bg px-5 sm:px-16 xl:px-32 py-3 sm:py-10 xl:py-20 rounded-xl mb-24">
        <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
            <img
            src={bookImg}
            className="max-w-full" />
            <div>
                <h1 className="text-3xl md:text-6xl font-bold text-title mb-10 sm:mb-16">Books to freshen up your bookshelf</h1>

                <Link className="font-bold text-xl text-white rounded-lg bg-prime px-7 py-4">View The List</Link>
            </div>
        </div>
    </section>);
};

export default Banner;