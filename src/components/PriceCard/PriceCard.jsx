import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-cyan-500 rounded-lg mt-4 p-4  shadow-xl shadow-cyan-500/100 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>$</span>
                <span className='text-5xl font-extrabold  text-purple-700'>{price.price}</span>
            </h2>

            <h5 className='text-2xl text-center font-bold my-6'>{price.name}</h5>

            <p className='underline font-bold text-white'>Features:</p>
            {
                price.features.map((feature, idx) => <Features
                key={idx}
                feature={feature}
                ></Features>)
            }
            <button className='w-full hover:bg-green-700 bg-green-500 py-2 rounded-lg text-white font-bold mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;