import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import Modal from "../../Main/Modal/Modal";


const CategoryItems = () => {
    const [categoryItems, setCategoryItems] = useState([]);
    const [modalCondition, setModalCondition] = useState(false);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setCategoryItems(data))
    }, [])

    const handleModal = () => {
        setModalCondition(!modalCondition);
    }


    return (
        <div className="my-5 flex justify-between items-center mx-3 md:mx-20">
            <div className="flex items-center gap-4 mx-10 overflow-x-scroll md:overflow-auto">
                {categoryItems.map(item => (
                    <div className="min-w-fit menuItem flex flex-col items-center border-b-2 border-gray-900 pb-1 opacity-70 border-opacity-0 hover:border-opacity-100 hover:opacity-100" key={item.id}>
                        <img src={item.menu_icon} className="w-7 md:w-10" alt="" />
                        <Link to={`places/${item.menu_item}`} className="font-semibold">{item.menu_item}</Link>
                    </div>
                ))}
            </div>
            <div>
                <button className="flex items-center gap-2 border-2 px-3 py-1 rounded-xl text-xl hover:shadow-xl" onClick={handleModal}>
                    <PiSlidersHorizontalBold />
                    <span>Filter</span>
                </button>
            </div>
            {
                modalCondition ?
                    <div className="absolute top-0 left-0 md:top-20 md:left-60 flex items-center">
                        <Modal handleModal={handleModal} ></Modal>
                    </div> : ''
            }

        </div>
    );
};

export default CategoryItems;