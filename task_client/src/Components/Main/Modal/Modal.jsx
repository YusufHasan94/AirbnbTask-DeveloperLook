import { FaTimes, FaHouseUser, FaBuilding, FaWarehouse } from "react-icons/fa";
import "./Modal.css";

const Modal = ({handleModal}) => {
    return (
        <div className="modalDesign bg-white rounded-xl z-30">
            <header className="border-b-2 py-2 relative">
                <h1 className="font-semibold text-xl text-center">Filters</h1>
                <button onClick={handleModal}>
                    <FaTimes className="absolute top-4 left-4" />
                </button>
            </header>
            <main className="p-5 overflow-y-scroll">
                <div className="border-b-2">
                    <h1 className="text-2xl font-semibold mb-1">Type of Place</h1>
                    <p>Search rooms, entire homes and more. Nightly price don't include fees or takes.</p>
                    <div className="my-5 flex justify-center items-center">
                        <div className="w-3/4 flex flex-col md:flex-row items-center justify-center rounded-xl overflow-hidden border-2 ">
                            <button className="flex flex-col items-center px-10 py-2 hover:bg-gray-950 hover:text-white w-full md:w-1/3"><span className="font-semibold">Any type</span><span>$69 avg.</span></button>
                            <button className="flex flex-col items-center px-10 py-2 hover:bg-gray-950 hover:text-white w-full md:w-1/3"><span className="font-semibold">Room</span><span>$47 avg.</span></button>
                            <button className="flex flex-col items-center px-10 py-2 hover:bg-gray-950 hover:text-white w-full md:w-1/3"><span className="font-semibold">Entire home</span><span>$71 avg.</span></button>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 my-5">
                    <h1 className="text-2xl font-semibold mb-1">Price range</h1>
                    <div className="m-5 flex flex-col md:flex-row justify-between gap-2 md:gap-5 items-center">
                        <div className="flex flex-col border-2 rounded-2xl p-2 w-1/2">
                            <label htmlFor="minValue">Min Price "$"</label>
                            <input type="number" name="minPrice" id="" />
                        </div>
                        <div>
                            -
                        </div>
                        <div className="flex flex-col border-2 rounded-2xl p-2 w-1/2">
                            <label htmlFor="minValue">Max Price "$"</label>
                            <input type="number" name="maxPrice" id="" />
                        </div>
                    </div>
                </div>
                <div className="border-b-2 my-5">
                    <h1 className="text-2xl font-semibold mb-1">Rooms and beds</h1>
                    <div className="m-5 flex flex-col justify-center items-center">
                        <div>
                            <h1 className="text-lg">Bedrooms</h1>
                            <div className="my-2 grid grid-cols-5 md:grid-cols-9 gap-5">
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">Any</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">1</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">2</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">3</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">4</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">5</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">6</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">7</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">8</button>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg">Beds</h1>
                            <div className="my-2 grid grid-cols-5 md:grid-cols-9 gap-5">
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">Any</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">1</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">2</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">3</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">4</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">5</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">6</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">7</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">8</button>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg">Bathrooms</h1>
                            <div className="my-2 grid grid-cols-5 md:grid-cols-9 gap-5">
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">Any</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">1</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">2</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">3</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">4</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">5</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">6</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">7</button>
                                <button className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">8</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 my-5 pb-5">
                    <h1 className="text-2xl font-semibold mb-1">Property type</h1>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-5">
                        <button className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaHouseUser className="text-4xl"/>
                            <span className="inline-block mt-10 font-semibold">House</span>
                        </button>
                        <button className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaBuilding className="text-4xl"/>
                            <span className="inline-block mt-10 font-semibold">Apartment</span>
                        </button>
                        <button className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaWarehouse className="text-4xl"/>
                            <span className="inline-block mt-10 font-semibold">Guesthouse</span>
                        </button>
                        <button className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaBuilding className="text-4xl"/>
                            <span className="inline-block mt-10 font-semibold">Hotel</span>
                        </button>
                    </div>
                </div>
            </main>
            <footer className="flex justify-between mx-10">
                <button className="font-semibold">Clear All</button>
                <button className="bg-black text-white font-semibold px-10 py-2 rounded-xl">Show All</button>
            </footer>
        </div>
    );
};

export default Modal;