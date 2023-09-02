import { Link } from "react-router-dom";
import companyLogo from "../../../../assets/companylogo.png";
import CategoryItems from "../../CategoryItems/CategoryItems";
import ConditionalInfo from "../ConditionalInfo/ConditionalInfo";
import Search from "../Search/Search";
import ResponsiveNav from "../../ResponsiveNav/ResponsiveNav";
import "./TopNavbar.css";

const TopNavbar = () => {
    return (
        <div>
            <div className="navigationArea flex items-center border-b-2 border-gray-200 relative">
                <div className="logoArea w-1/4 flex justify-center">
                    <Link to="/">
                        <img src={companyLogo} alt="companyLogo" className="w-40"/>
                    </Link>
                </div>
                <div className="searchBar w-1/2 flex flex-col justify-center items-center">
                    <Search></Search>
                </div>
                <div className="conditionalInfo w-1/4 flex justify-center ">
                    <ConditionalInfo></ConditionalInfo>
                </div>
            </div>
            <div className="responsiveNav hidden">
                <ResponsiveNav></ResponsiveNav>
            </div>
            <CategoryItems></CategoryItems>
        </div>
    );
};

export default TopNavbar;