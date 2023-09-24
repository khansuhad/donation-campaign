import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationCardDetails = () => {
    const dataLoad = useLoaderData();
    console.log(dataLoad)
    const id = useParams();
    console.log(id.donationId);
    const [data, setData] = useState();
    useEffect(() => {
       const donationData = dataLoad?.find(item => item?.id === Number(id?.donationId));
       setData(donationData);
    },[id,dataLoad]);
    console.log(data)
    return (
        <div className="px-[20%]">
            <div>
            <div className="hero flex flex-col-reverse justify-between" style={`${data?.image}`}>
  <div className="hero-overlay bg-opacity-60 h-20 ">
  <button className="btn btn-primary">Get Started</button>
  </div>
 
</div>
            </div>
        </div>
    );
};

export default DonationCardDetails;