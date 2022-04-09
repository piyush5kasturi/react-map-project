import React from 'react'
import {
    Link
} from 'react-router-dom';
import CropYield from './CropYield';
import Drought from './Drought';

const Home = () => {
    return (
        <>
            <div className="bg-[#552f03] text-white text-xl py-5">
                <div className="max-w-8xl mx-52 px-2 sm:px-6 lg:px-8 space-x-8">
                    <Link to="/">Drought Condition</Link>
                    <Link to="/crop">Crop Yield Status</Link>
                </div>

            </div>
            <Drought />
        </>
    )
}

export default Home