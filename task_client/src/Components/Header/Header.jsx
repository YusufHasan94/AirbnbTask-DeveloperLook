import Navbar from "../Shared/Navbar/Navbar";
import companyLogo from "../../assets/companylogo.png";
import { HiMagnifyingGlass, HiOutlineGlobeAlt, HiBars3, HiUserCircle} from "react-icons/hi2";

const Header = () => {
    return (
        <div className="">
            <div className="flex justify-around border-b-2 py-4">
                <div>
                    <img src={companyLogo} className="w-32" alt="companyLogo" />
                </div>
                <div>
                    <div className="flex items-center gap-4 border-2 w-fit px-5 py-2 rounded-full text-lg">
                        <a href="#" className="border-r-2 pr-4">Anywhere</a>
                        <a href="#" className="border-r-2 pr-4">Any week</a>
                        <a href="#">Add guests</a>
                        <button className="bg-red-500 p-3 rounded-full text-white"><HiMagnifyingGlass/></button>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <h1 className="font-semibold">Airbnb your home</h1>
                    <HiOutlineGlobeAlt className="text-2xl"/>
                    <button className="flex items-center gap-2 border-2 p-2 rounded-full text-2xl">
                        <HiBars3/>
                        <HiUserCircle className=""/>
                    </button>
                </div>
            </div>
            <div>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;