import { Link } from "react-router-dom";
import error from "../../assets/error.png";

const NotFound = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <img src={error} className="w-full" alt="" />
                <Link to="/" className="px-4 py-2 bg-red-400 text-white font-semibold rounded-full">Go Back</Link>

            </div>
        </div>
    );
};

export default NotFound;