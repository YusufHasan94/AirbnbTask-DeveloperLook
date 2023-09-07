import Calendar from "react-calendar";

const Calender = () => {
    return (
        <div className="calenderArea absolute left-28 bg-gray-100 mt-5 text-center flex flex-col items-center rounded-xl shadow-xl p-5 z-10">
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
    );
};

export default Calender;