import { useEffect, useState } from "react";
import { PiSlidersHorizontal } from "react-icons/pi";

const Navbar = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('/public/menu.json')
        .then(res=> res.json())
        .then(data => setMenu(data))
    },[])

    return (
        <div className="p-10 flex justify-between">
            <ul className="w-3/4 flex justify-center gap-10">
                {
                    menu.map(item=> (
                        <li key={item.id} className="flex flex-col items-center opacity-60 border-b-4 border-opacity-0 hover:border-opacity-100 hover:opacity-100 border-black">
                            <img src={item.menu_icon} className="w-8" alt="menuIcon" />
                            <span className="font-semibold">{item.menu_item}</span>
                        </li>
                    ))
                }
            </ul>

            <button className="text-xl flex items-center gap-3 border-2 px-4 rounded-2xl border-gray-200">
                <PiSlidersHorizontal className=""/>
                <span>Filter</span>
            </button>
        </div>
    );
};

export default Navbar;