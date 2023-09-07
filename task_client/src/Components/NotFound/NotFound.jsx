import { Link } from "react-router-dom";
import error from "../../assets/error.png";

const NotFound = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <img src={error} className="w-full" alt="" />
                    <Link to="/" className="px-4 py-2 bg-red-400 text-white font-semibold rounded-full w-1/4 text-center">Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;