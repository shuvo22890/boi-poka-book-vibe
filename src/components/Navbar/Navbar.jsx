import { Link } from "react-router-dom";
import Links from "./LInks";

const Navbar = () => {
    return (<header>
        <nav className="navbar py-8 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <Link to="/" className="font-bold text-lg sm:text-3xl text-title">Book Vibe</Link>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-2 sm:px-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <Links/>
                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Links/>
                </ul>
            </div>

            <div className="navbar-end">
                <button className="px-2 sm:px-7 py-3 rounded-lg text-sm sm:text-lg text-white bg-prime font-semibold">Sign In</button>
                <button className="px-2 sm:px-7 py-3 rounded-lg text-sm sm:text-lg text-white bg-second font-semibold ml-2">Sign Up</button>
            </div>
        </nav>
    </header>);
};

export default Navbar;