import { useState } from "react";
import Calendar from "react-calendar";
import { FaMagnifyingGlass } from "react-icons/fa6";

const ConditionalSearch = () => {

    const [calender, setCalender] = useState(false);

    const openCalender =()=>{
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
                <form action="" className="flex items-center justify-between">
                    <div className="border-r-2 border-gray-100 w-1/4 hover:border-opacity-0">
                        <div className="flex flex-col gap-1 py-2 px-5 rounded-full hover:bg-gray-100 ">
                            <label htmlFor="location">Where</label>
                            <input type="text" name="location" id="" placeholder="Search destination" className="bg-transparent" />
                        </div>
                    </div>
                    <div className="border-r-2 border-gray-100 hover:border-opacity-0">
                        <button onClick={openCalender} className="flex flex-col gap-1 py-2 px-7 rounded-full w-full hover:bg-gray-100">
                            <span className="font-semibold">Check in</span>
                            <span className="opacity-60">Add dates</span>
                        </button>
                        <div className={`calenderArea absolute left-1/4 bg-gray-50 mt-5 text-center flex flex-col items-center rounded-xl shadow-xl p-5 ${calender?'opacity-100':'opacity-0'}`}>
                            <div className="btnGroup px-5 py-1 bg-gray-100 rounded-full w-fit flex justify-between gap-3">
                                <button className="px-4 py-2 bg-white rounded-full">Dates</button>
                                <button className="px-4 py-2 rounded-full">Months</button>
                                <button className="px-4 py-2 rounded-full">Flexible</button>
                            </div>
                            <div className="flex gap-5 mt-2">
                                <Calendar className="font-semibold underline-offset-8"></Calendar>
                                <Calendar className="underline-offset-8"></Calendar>
                            </div>
                            <div className="mt-5 flex gap-5">
                                <button className="px-2 py-1 border-2 border-gray rounded-full">Exact dates</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 1 days</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 2 days</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 3 days</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 7 days</button>
                            </div>
                        </div>
                    </div>
                    <div className="border-r-2 border-gray-100 hover:border-opacity-0">
                        <button onClick={openCalender} className="flex flex-col gap-1 py-2 px-7 rounded-full w-full hover:bg-gray-100">
                            <span className="font-semibold">Check out</span>
                            <span className="opacity-60">Add dates</span>
                        </button>
                        <div className={`calenderArea absolute left-1/4 bg-gray-50 mt-5 text-center flex flex-col items-center rounded-xl shadow-xl p-5 ${calender?'opacity-100':'opacity-0'}`}>
                            <div className="btnGroup px-5 py-1 bg-gray-100 rounded-full w-fit flex justify-between gap-3">
                                <button className="px-4 py-2 bg-white rounded-full">Dates</button>
                                <button className="px-4 py-2 rounded-full">Months</button>
                                <button className="px-4 py-2 rounded-full">Flexible</button>
                            </div>
                            <div className="flex gap-5 mt-2">
                                <Calendar className="font-semibold underline-offset-8"></Calendar>
                                <Calendar className="underline-offset-8"></Calendar>
                            </div>
                            <div className="mt-5 flex gap-5">
                                <button className="px-2 py-1 border-2 border-gray rounded-full">Exact dates</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 1 days</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 2 days</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 3 days</button>
                                <button className="px-2 py-1 border-2 border-gray rounded-full">+ 7 days</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-full px-4 hover:bg-gray-100 hover:border-opacity-0">
                        <button className="flex flex-col gap-1 py-2 px-4 rounded-full ">
                            <span className="font-semibold">Who</span>
                            <span className="opacity-60">Add guests</span>
                        </button>
                        <button className="flex items-center gap-4 bg-red-500 py-4 px-7 text-xl rounded-full text-white">
                            {/* <span>Search</span> */}
                            <FaMagnifyingGlass />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConditionalSearch;