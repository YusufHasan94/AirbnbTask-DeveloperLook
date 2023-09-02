import companyLogo from "../../../../assets/companylogo.png";
import CategoryItems from "../../CategoryItems/CategoryItems";
import ConditionalInfo from "../ConditionalInfo/ConditionalInfo";
import Search from "../Search/Search";

const TopNavbar = () => {
    return (
        <div>
            <div className="flex items-center border-b-2 border-gray-200 relative">
                <div className="logoArea w-1/4 flex justify-center">
                    <img src={companyLogo} alt="companyLogo" className="w-40"/>
                </div>
                <div className="searchBar w-1/2 flex flex-col justify-center items-center">
                    <Search></Search>
                </div>
                <div className="conditionalInfo w-1/4 flex justify-center ">
                    <ConditionalInfo></ConditionalInfo>
                </div>
            </div>
            <CategoryItems></CategoryItems>
        </div>
    );
};

export default TopNavbar;