
const Place = () => {
    return (
        <div className="my-4">
            <div className="my-4">
                <h1 className="text-2xl font-semibold">Type of Place</h1>
                <p>Search rooms, entire homes and more. Nightly prices do not include fees or taxes.</p>
            </div>
            <div className="flex justify-between border-2 rounded-2xl overflow-hidden">
                <button className="p-4 border-r-2 w-1/3">
                    <span className="font-semibold">Any type</span> <br /> $592 avg.
                </button>
                <button className="p-4 border-r-2 w-1/3">
                    <span className="font-semibold">Room</span> <br /> $114 avg.
                </button>
                <button className="p-4 rounded-2xl w-1/3">
                    <span className="font-semibold">Entire home</span> <br /> $689 avg.
                </button>
            </div>
        </div>
    );
};

export default Place;