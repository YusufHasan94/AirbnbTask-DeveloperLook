import { useEffect, useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa6";
import { DotLoader } from "react-spinners";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Main = () => {
    const [places, setPlaces] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch('https://task-server-one-theta.vercel.app/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
                setLoader(false);
            }
            );
    }, []);

    return (
        <div>
            {
                loader ?
                    <div className="w-full flex items-center justify-center">
                        <DotLoader color="#F87171" />
                    </div> :
                    <div className="cardsContainer grid grid-cols-1 md:grid-cols-4 my-5 mx-10 gap-5">
                        {
                            places.slice(0, 20).map(place => (
                                <div className="card" key={place._id}>
                                    <Swiper
                                        pagination={{
                                            dynamicBullets: true,
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                    >
                                        {
                                            place.image.map((i, index)=>(
                                                <SwiperSlide key={index}>
                                                    <div className="relative">
                                                        <img src={i} className="h-64 w-full rounded-xl" alt="" />
                                                        <FaHeart className="absolute top-5 right-5 text-xl opacity-60" />
                                                    </div>
                                                </SwiperSlide>
                                            )) 
                                        }

                                    </Swiper>
                                    <div className="px-1 mt-3">
                                        <div className="flex justify-between">
                                            <h1 className="font-semibold">{place.location}</h1>
                                            {
                                                place.rating ? <p className="flex items-center gap-2"><FaStar></FaStar><span>{place.rating}</span></p> : ''
                                            }
                                        </div>
                                        <h1>{place.place}</h1>
                                        <h1>{place.available_dates}</h1>
                                        <p><span className="font-semibold">${place.price}</span> {place.shift}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default Main;