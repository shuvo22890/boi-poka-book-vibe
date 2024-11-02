import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-5xl text-yellow-500">404 Page Not Found!</h2>
            <p className="text-lg font-medium text-title">Go to <Link to="/" className="font-bold">Home Page</Link></p>
        </div>
    );
};

export default ErrorPage;