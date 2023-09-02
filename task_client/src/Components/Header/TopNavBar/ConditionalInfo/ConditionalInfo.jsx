import { FaGlobe, FaBars, FaCircleUser, } from "react-icons/fa6";

const ConditionalInfo = () => {
    return (
        <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-full font-semibold hover:bg-gray-100">
                Airbnb your home
            </button>
            <button className="p-3 rounded-full hover:bg-slate-100">
                <FaGlobe className="text-xl" />
            </button>
            <button className="flex gap-2 py-3 rounded-full border-2 border-gray-200 px-4 hover:bg-slate-100">
                <FaBars className="text-2xl" />
                <FaCircleUser className="text-2xl" />
            </button>
        </div>
    );
};

export default ConditionalInfo;