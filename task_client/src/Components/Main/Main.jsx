import { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Main = () => {
    const [location, setLocation] = useState([]);
    useEffect(() => {
        fetch("/public/journey.json")
            .then(res => res.json())
            .then(data => setLocation(data));
    }, [])
    return (
        <div className="grid grid-cols-5 gap-4 mx-10">
            {
                location.map(i => (
                    <div key={i.id} >
                        <div className="relative">
                            <Swiper 
                                cssMode={true}
                                navigation={true}
                                pagination={true}
                                mousewheel={true}
                                keyboard={true}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                className="mySwiper">
                                {
                                    i.image.map((j, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={j} className="rounded-2xl w-full h-60" alt="" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <FaHeart className="absolute top-4 right-4 text-2xl z-10" />
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <h1 className="font-bold">{i.location}</h1>
                            {
                                i.rating ? <p className="flex items-center gap-2"><FaStar /> {i.rating}</p> : ""
                            }
                        </div>
                        <div>
                            <h1>{i.place}</h1>
                            <h1>{i.available_dates}</h1>
                            <h1><span className="font-bold">${i.price}</span> {i.shift}</h1>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Main;