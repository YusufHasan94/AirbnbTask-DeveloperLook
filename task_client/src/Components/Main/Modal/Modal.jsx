import { FaTimes, FaHouseUser, FaBuilding, FaWarehouse } from "react-icons/fa";
import "./Modal.css";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { Bar, BarChart } from "recharts";
import { Link } from "react-router-dom";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const MIN = 0;
const MAX = 1400;

const Modal = ({ handleModal }) => {

    const [filteredPrice, setFilteredPrice] = useState(null);
    const [filteredPriceData, setfilteredPriceData] = useState([]);
    const [betweenRange, setBetweenRange] = useState([]);
    const [btnClicked, setBtnClicked] = useState('');
    const [values, setValues] = useState([MIN, MAX]);
    const buttonLabels = Array.from({ length: 8 }, (_, index) => `${index + 1}`)

    const handlePlaceType = async (price) => {
        const res = await fetch(`http://localhost:5000/filterPlaces?price=${price}`);
        const data = await res.json();
        setfilteredPriceData(data);
        setBtnClicked(price);
        setFilteredPrice(price);
        console.log(data);
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/price-range?minPrice=${values[0]}&maxPrice=${values[1]}`)
        .then(res => res.json())
        .then(data => setBetweenRange(data));

    },[MIN, MAX])


    const handleRoomChange = (btnLabel)=>{
        console.log(btnLabel)
    }

    const propertyType = (property)=>{
        console.log(property);
    }

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
                            <button
                                onClick={() => handlePlaceType(69)}
                                className={`flex flex-col items-center px-10 py-2 hover:bg-gray-950 hover:text-white w-full md:w-1/3  ${btnClicked == 69 ? 'bg-black text-white' : ''}`}>
                                <span className="font-semibold">Any type</span>
                                <span>$69 avg.</span>
                            </button>
                            <button
                                onClick={() => handlePlaceType(47)}
                                className={`flex flex-col items-center px-10 py-2 hover:bg-gray-950 hover:text-white w-full md:w-1/3 ${btnClicked == 47 ? 'bg-black text-white' : ''}`}>
                                <span className="font-semibold">Room</span>
                                <span>$47 avg.</span>
                            </button>
                            <button
                                onClick={() => handlePlaceType(71)}
                                className={`flex flex-col items-center px-10 py-2 hover:bg-gray-950 hover:text-white w-full md:w-1/3 ${btnClicked == 71 ? 'bg-black text-white' : ''}`}>
                                <span className="font-semibold">Entire home</span>
                                <span>$71 avg.</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 my-5">
                    <h1 className="text-2xl font-semibold mb-1">Price range</h1>
                    <div className="m-5 flex flex-col gap-2 md:gap-5 items-center">
                        <div className="w-full flex items-center justify-center mb-5">
                            <div className="w-full">
                                <div className="flex justify-center">
                                    <BarChart width={400} height={100} data={data}>
                                        <Bar dataKey="uv" fill="#fffff" />
                                    </BarChart>
                                </div>
                                <ReactSlider
                                    className="slider"
                                    thumbClassName="w-7 h-7 border-2 rounded-full px-2 py-1 shadow-xl bg-white z-50 absolute -top-2 "
                                    trackClassName="bg-black h-1 opacity-50 mx-5"
                                    onChange={setValues}
                                    value={values}
                                    min={MIN}
                                    max={MAX}
                                />
                            </div>
                        </div>
                        <div className="w-3/4 flex justify-between items-center gap-5">
                            <div className="flex flex-col border-2 rounded-2xl p-2 w-1/2">
                                <label htmlFor="minValue">Min Price "$"</label>
                                <input type="number" name="minPrice" id="" value={values[0]} />
                            </div>
                            <div>
                                -
                            </div>
                            <div className="flex flex-col border-2 rounded-2xl p-2 w-1/2">
                                <label htmlFor="maxValue">Max Price "$"</label>
                                <input type="number" name="maxPrice" id="" value={values[1]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 my-5">
                    <h1 className="text-2xl font-semibold mb-1">Rooms and beds</h1>
                    <div className="m-5 flex flex-col justify-center items-center">
                        <div className="">
                            <div className="">
                                <h1 className="text-lg">Bedrooms</h1>
                                <div className="my-2 grid grid-cols-5 md:grid-cols-9 gap-5">
                                    <button onClick={()=>handleRoomChange('any')} className={`hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl text-center`}>Any</button>
                                    {
                                        buttonLabels.map((btnLabel, index) => (
                                            <button key={index} onClick={() => handleRoomChange(btnLabel)} className="hover:bg-gray-950 hover:text-white border-2 py-2 px-8 rounded-2xl">{btnLabel}</button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lg">Beds</h1>
                                <div className="my-2 grid grid-cols-5 md:grid-cols-9 gap-5">
                                    <button onClick={()=>handleRoomChange('any')} className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">Any</button>
                                    {
                                        buttonLabels.map((btnLabel, index) => (
                                            <button key={index} onClick={() => handleRoomChange(btnLabel)} className="hover:bg-gray-950 hover:text-white border-2 py-2 px-8 rounded-2xl">{btnLabel}</button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lg">Bathrooms</h1>
                                <div className="my-2 grid grid-cols-5 md:grid-cols-9 gap-5">
                                    <button onClick={()=> handleRoomChange('any')} className="hover:bg-gray-950 hover:text-white border-2 py-2 px-5 rounded-2xl">Any</button>
                                    {
                                        buttonLabels.map((btnLabel, index) => (
                                            <button key={index} onClick={() => handleRoomChange(btnLabel)} className="hover:bg-gray-950 hover:text-white border-2 py-2 px-8 rounded-2xl">{btnLabel}</button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 my-5 pb-5">
                    <h1 className="text-2xl font-semibold mb-1">Property type</h1>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-5">
                        <button onClick={()=>propertyType('House')} className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaHouseUser className="text-4xl" />
                            <span className="inline-block mt-10 font-semibold">House</span>
                        </button>
                        <button onClick={()=>propertyType('Apartment')} className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaBuilding className="text-4xl" />
                            <span className="inline-block mt-10 font-semibold">Apartment</span>
                        </button>
                        <button onClick={()=>propertyType('Guesthouse')} className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaWarehouse className="text-4xl" />
                            <span className="inline-block mt-10 font-semibold">Guesthouse</span>
                        </button>
                        <button onClick={()=>propertyType('Hotel')} className="border-2 px-10 py-5 rounded-xl hover:border-black w-3/4 md:w-1/4">
                            <FaBuilding className="text-4xl" />
                            <span className="inline-block mt-10 font-semibold">Hotel</span>
                        </button>
                    </div>
                </div>
            </main>
            <footer className="flex justify-between mx-10">
                <button className="font-semibold">Clear All</button>
                <Link to={`/filterPlaces/${filteredPrice}`}>
                    <button className="bg-black text-white font-semibold px-10 py-2 rounded-xl" >Show {filteredPriceData.length} places</button>
                </Link>
            </footer>
        </div>
    );
};

export default Modal;