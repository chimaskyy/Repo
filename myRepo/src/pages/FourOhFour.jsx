// FourOhFour.js
import { Link } from "react-router-dom";


const FourOhFour = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-25">
      <div>
        <p className="font-bold text-3xl">404 - Page Not Found</p>
        <p className="font-bold text-2xl">
          Oops! The page you looking for does not exist.
        </p>
      </div>
      <Link to={`/`} className="underline hover:text-white text-2xl">
        Back to Home
      </Link>
    </div>
  );
};

export default FourOhFour;
