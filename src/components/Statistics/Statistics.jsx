import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useLoaderData } from "react-router-dom";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const Statistics = () => {
    const homeData = useLoaderData();
    const totalHomeData = homeData.length;
    const [donationCard, setDonationCard] = useState([]);
   useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation')) || [];   
        setDonationCard(donationItem);
},[])
     const  totalDonationData = donationCard.length ;
    const  donationPercentage = ((totalDonationData / totalHomeData) * 100).toFixed(2);
    const data = {
        labels: ["Donation Data", "Remaining Data"],
        datasets: [
          {
            data: [donationPercentage, 100 - donationPercentage ],
            backgroundColor: ["#00C49F", "#FF444A"],
            hoverBackgroundColor: ["#00C49F", "#FF444A"],
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
           
            display: true,
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || "";
                const value = context.parsed || 0;
                return `${label}: ${value.toFixed(2)}%`;
              },
            },
          },
        },
      };
      
    return (
        <div className="w-96 lg:w-[30%] flex justify-center items-center text-center mx-auto mt-20">
           
        <Pie data={data} options={options}></Pie>
        </div>
    );
};

export default Statistics;