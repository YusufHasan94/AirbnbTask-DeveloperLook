import Place from "../Place/Place";
import PriceRange from "../PriceRange/PriceRange";
import Property from "../Property/Property";
import Rooms from "../Rooms/Rooms";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({isOpen, onClose}) => {
    
    if(!isOpen) return null;
    return (
        <div className='modal modal-wrapper'>
            <div className="modalContent rounded-2xl relative p-4">
                <header>
                    <button className='absolute top-4 left-4 text-xl' onClick={onClose}><FaTimes/></button>
                    <h1 className="text-center text-xl font-semibold border-b-2 pb-4">Filter</h1>
                </header>
                <main className="h-64 overflow-y-scroll p-7">
                    <Place></Place>
                    <hr />
                    <PriceRange></PriceRange>
                    <hr />
                    <Rooms></Rooms>
                    <hr />
                    <Property></Property>
                </main>
                <footer className="flex justify-between items-center py-2">
                    <button className="font-semibold">Clear All</button>
                    <button className="bg-black text-white px-4 py-2 rounded-2xl">Show All Places</button>
                </footer>
            </div>
        </div>
    );
};

export default Modal;