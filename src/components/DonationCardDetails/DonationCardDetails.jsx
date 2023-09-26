import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedDonationCard from "../SelectedDonationCard/SelectedDonationCard";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DonationCardDetails = () => {
    const dataLoad = useLoaderData();
    // console.log(dataLoad)
    const id = useParams();
    // console.log(id.donationId);
    const [data, setData] = useState();
    useEffect(() => {
       const donationData = dataLoad?.find(item => item?.id === Number(id?.donationId));
       setData(donationData);
    },[id,dataLoad]);
    // console.log(data?.titleColor)
    const donateColor = data?.titleColor ;
    
    
    const handleAddToDonation = () => {
        const addedDonationArray = [];
        const donationItem = JSON.parse(localStorage.getItem("donation"));
        
        if(!donationItem){
            addedDonationArray.push(data);
            localStorage.setItem("donation", JSON.stringify(addedDonationArray));
            
            toast.success(`Added successfully `, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else{
        
            const have = donationItem.find(e => e.id === data?.id );
            
            if(!have){
                addedDonationArray.push(...donationItem, data)
                localStorage.setItem("donation", JSON.stringify(addedDonationArray))
                toast.success("Successfully added", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                
            }
            else{
                
                toast.error("Already added", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }
        
    }
   
    return (
        <div>
            <div className=" px-[10%] py-10  ">
         <figure className="w-full h-full image-overlay-container">
            <img src={data?.image} alt=""  className="w-full h-96"/>
            <div className="overlay-content bg-black opacity-70 h-20 relative bottom-20">
            
            </div>
            <button className="btn border-none p-2 text-white rounded font-semibold relative bottom-36 left-6 " style={{backgroundColor:donateColor}} onClick={handleAddToDonation}>Donate ${data?.price}</button>
         </figure>
         <div>
            <h1 className="font-bold text-3xl">{data?.title}</h1>
            <p className="mt-10 text-3xl font-normal flex justify-center">{data?.description}</p>
         </div>
         
        </div>
        <ToastContainer />
        </div>
    );
};

export default DonationCardDetails;