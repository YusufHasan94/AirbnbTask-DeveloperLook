import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiSlidersHorizontalBold } from "react-icons/pi";

const CategoryItems = () => {
    const [categoryItems, setCategoryItems] = useState([]);
    useEffect(()=>{
        fetch('/public/menu.json')
        .then(res=> res.json())
        .then(data=> setCategoryItems(data))
    },[])
    return (
        <div className="my-5 flex justify-between mx-20">
            <div className="flex items-center gap-4 mx-10">
                {categoryItems.map(item=> (
                    <div className="menuItem flex flex-col items-center border-b-2 border-gray-900 pb-1 opacity-70 border-opacity-0 hover:border-opacity-100 hover:opacity-100" key={item.id}>
                        <img src={item.menu_icon} className="w-10" alt="" />
                        <Link to="#" className="font-semibold">{item.menu_item}</Link>
                    </div>
                ))}
            </div>
            <div>
                <button className="flex items-center gap-2 border-2 px-3 py-1 rounded-xl text-xl hover:shadow-xl">
                    <PiSlidersHorizontalBold/>
                    <span>Filter</span>
                </button>
            </div>
        </div>
    );
};

export default CategoryItems;