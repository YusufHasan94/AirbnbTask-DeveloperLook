import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Calender from "../../Calender/Calender";
import { Link } from "react-router-dom";

const ConditionalSearch = () => {

    const [calender, setCalender] = useState(false);
    const [location, setLocation] = useState(null);
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }


    const openCalender = () => {
        setCalender(!calender);
        console.log(calender);
    }

    return (
        <div className="w-full bg-transparent mt-5 flex flex-col justify-center items-center">
            <div className="links flex gap-5">
                <button className="border-b-2 border-gray-500 border-opacity-0 text-lg fort-semibold hover:border-opacity-100">
                    <a href="#" className="p-2 hover:opacity-60">Stays</a>
                </button>
                <button className="border-b-2 border-gray-500 border-opacity-0 text-lg fort-semibold hover:border-opacity-100">
                    <a href="#" className="p-2 hover:opacity-60">Experiences</a>
                </button>
                <button className="border-b-2 border-gray-500 border-opacity-0 text-lg fort-semibold hover:border-opacity-100">
                    <a href="#" className="p-2 hover:opacity-60">Online Experiences</a>
                </button>
            </div>
            <div className="border-2 border-gray-200 rounded-full bg-white mt-5">
                <div className="flex items-center justify-between">
                    <div className="border-r-2 border-gray-100 w-1/4 hover:border-opacity-0">
                        <div className="flex flex-col gap-1 py-2 px-5 rounded-full hover:bg-gray-100 ">
                            <label htmlFor="location">Where</label>
                            <input type="text" name="location" id="" placeholder="Search destination" className="bg-transparent" onChange={handleLocation} />
                        </div>
                    </div>
                    <div className="border-r-2 border-gray-100 hover:border-opacity-0">
                        <button onClick={openCalender} className="flex flex-col gap-1 py-2 px-7 rounded-full w-full hover:bg-gray-100">
                            <span className="font-semibold">Check in</span>
                            <span className="opacity-60">Add dates</span>
                        </button>
                        {
                            calender ? <Calender /> : ""
                        }

                    </div>
                    <div className="border-r-2 border-gray-100 hover:border-opacity-0">
                        <button onClick={openCalender} className="flex flex-col gap-1 py-2 px-7 op rounded-full w-full hover:bg-gray-100">
                            <span className="font-semibold">Check out</span>
                            <span className="opacity-60">Add dates</span>
                        </button>
                        {
                            calender ? <Calender /> : ""
                        }

                    </div>
                    <div className="flex items-center gap-4 rounded-full px-4 hover:bg-gray-100 hover:border-opacity-0">
                        <button className="flex flex-col gap-1 py-2 px-4 rounded-full ">
                            <span className="font-semibold">Who</span>
                            <span className="opacity-60">Add guests</span>
                        </button>
                        <Link to={`/locations/${location}`}>
                            <button className="flex items-center gap-4 bg-red-500 py-4 px-7 text-xl rounded-full text-white">
                                <FaMagnifyingGlass />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConditionalSearch;