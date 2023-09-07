import { useEffect, useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom';

const SearchView = () => {
    const [sortedLocation, setSortedLocation] = useState([]); 
    const location = useParams();
    const allPlaces = useLoaderData();
    useEffect(()=>{
        const selected = allPlaces.filter(i=> i.location.split(", ")[1] == location.location);
        setSortedLocation(selected);
    },[])

    return (
        sortedLocation ?
        <div className="cardsContainer grid grid-cols-1 md:grid-cols-4 my-5 mx-10 gap-5">
            {
                sortedLocation.map(place=>(
                    <div className="card" key={place._id}>
                        <div className="relative">
                            <img src={place.image[0]} className="h-64 w-full rounded-xl" alt="" />
                            <FaHeart className="absolute top-5 right-5 text-xl opacity-60"/>
                        </div>
                        <div className="px-1 mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">{place.location}</h1>
                                {
                                    place.rating?<p className="flex items-center gap-2"><FaStar></FaStar><span>{place.rating}</span></p>:''
                                }                            
                            </div>
                            <h1>{place.place}</h1>
                            <h1>{place.available_dates}</h1>
                            <p><span className="font-semibold">${place.price}</span> {place.shift}</p>
                        </div>

                    </div>
                ))
            }
        </div>:
        <div>
            <h1>No result found</h1>
        </div>
    );
};

export default SearchView;