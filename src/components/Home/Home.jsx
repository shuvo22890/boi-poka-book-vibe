import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-2'>
            <Banner/>
            <Books/>
        </div>
    );
};

export default Home;