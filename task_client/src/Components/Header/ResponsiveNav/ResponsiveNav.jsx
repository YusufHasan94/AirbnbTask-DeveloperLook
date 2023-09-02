import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";

const ResponsiveNav = () => {
    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className="shadow-xl flex items-center gap-10 justify-between px-10 py-2 rounded-full">
                <FaMagnifyingGlass className="text-3xl"/>
                <div>
                    <h1 className="font-semibold">Anywhere</h1>
                    <h1 className="flex gap-2 opacity-70"><span>Any Where</span><span>Add guests</span></h1>
                </div>
                <PiSlidersHorizontalDuotone className="text-3xl rounded-full"/>
            </div>
        </div>
    );
};

export default ResponsiveNav;