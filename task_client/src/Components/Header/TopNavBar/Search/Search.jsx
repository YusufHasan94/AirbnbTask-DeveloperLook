import { FaMagnifyingGlass } from "react-icons/fa6";
import ConditionalSearch from "../ConditionalSearch/ConditionalSearch";
import "./Search.css";
import { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState(true);
    const handleChangSearchBar =  ()=>{
        setSearch(!search);
    }
    return (
        <div className="flex flex-col items-center ">
            <div className={`flex justify-between items-center bg-white py-3 px-2 max-w-fit border-2 border-gray-100 rounded-full hover:shadow-xl 
            ${search?'':'hideUI'}`}>
                <button className="border-r-2 px-5" onClick={handleChangSearchBar}>Anywhere</button>
                <button className="border-r-2 px-5">Any week</button>
                <button className="px-5">Add guests</button>
                <button className="p-2 bg-red-400 rounded-full text-white font-semibold"><FaMagnifyingGlass/></button>
            </div>
            <div className={`flex justify-center mb-2 ${search?'hideUI':''}`}>
                <ConditionalSearch></ConditionalSearch>
            </div>
        </div>
    );
};

export default Search;