import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRange = () => {
    const [range, setRange] = useState([0, 1200]);

    const handleSliderChange = (newRange) => {
        setRange(newRange);
    };

    return (
        <div className="container mx-auto my-4">
            <h2 className="text-2xl font-semibold mb-4">Price Range</h2>
            <Slider
                min={0}
                max={1200}
                value={range}
                onChange={handleSliderChange}
                range
                allowCross={false}
            />
            <div className="flex justify-between items-center my-4">
                <div className='flex flex-col'>
                    <label htmlFor="minValue">Min Price ($)</label>
                    <input type="number" className='border-2 text-center' value={range[0]} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="maxValue">Max Price ($)</label>
                    <input type="number" className='border-2 text-center' value={range[1]} />
                </div>
            </div>
        </div>
    );
};

export default PriceRange;