import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";

const Statistics = () => {
  const homeData = useLoaderData();
  const totalHomeData = homeData?.length;
 
  const [donationCard, setDonationCard] = useState([]);
 useEffect(()=>{
      const donationItem = JSON.parse(localStorage.getItem('donation')) || [];   
      setDonationCard(donationItem);
},[])
   const  totalDonationData = donationCard?.length ;
   const unDontaion = totalHomeData - totalDonationData ;
  const data = [
    { name: 'Group A', value: unDontaion },
    { name: 'Group B', value: totalDonationData },
];

const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
    return (
      <div className='my-20'>
        <ResponsiveContainer width="100%" height={400}>
      <PieChart>
          <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={200}
              fill="#8884d8"
              dataKey="value"
          >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
      </PieChart>
  </ResponsiveContainer>
  <div className='flex justify-center items-center gap-5 my-10'>
                <p className='flex justify-center items-center gap-2'>Your Donation <p className='h-3 w-10 bg-[#00C49F] rounded'></p></p>
                <p className='flex justify-center items-center gap-2'>Total Donation <p className='h-3 w-10 bg-[#FF444A] rounded'></p></p>
  </div>
      </div>
    );
};



export default Statistics;