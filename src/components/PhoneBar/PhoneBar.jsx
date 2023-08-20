import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }, [])

    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data => {
            const loadedData = data.data.data;
            // console.log(loadedData);
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-')
                // console.log(parts);
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                };
                return phoneInfo;
            });
            console.log(phoneData);
            setPhones(phoneData)
        })


    return (
        <div className='flex flex-col md:flex-col'>
            <div className='w-full md:w-2/3'>
                <BarChart
                    width={1000}
                    height={500}
                    data={phones}
                >
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default PhoneBar;