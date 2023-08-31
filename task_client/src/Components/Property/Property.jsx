import { FaHouseUser, FaBuilding, FaHotel, FaIgloo} from "react-icons/fa";

const Property = () => {
    return (
        <div className="my-4">
            <h1 className="text-2xl font-semibold">Property type</h1>
            <div className="flex justify-between gap-4 my-7">
                <button className="p-8 border-2 rounded-2xl w-1/4 flex flex-col justify-start gap-4">
                    <FaHouseUser className="text-4xl"/>
                    <span className="text-xl">House</span>
                </button>
                <button className="p-8 border-2 rounded-2xl w-1/4 flex flex-col justify-start gap-4">
                    <FaBuilding className="text-4xl"/>
                    <span className="text-xl">Apartment</span>
                </button>
                <button className="p-8 border-2 rounded-2xl w-1/4 flex flex-col justify-start gap-4">
                    <FaIgloo className="text-4xl"/>
                    <span className="text-xl">Guesthouse</span>
                </button>
                <button className="p-8 border-2 rounded-2xl w-1/4 flex flex-col justify-start gap-4">
                    <FaHotel className="text-4xl"/>
                    <span className="text-xl">Hotel</span>
                </button>
            </div>
        </div>
    );
};

export default Property;