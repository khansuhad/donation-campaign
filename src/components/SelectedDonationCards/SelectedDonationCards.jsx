import { useEffect, useState } from "react";
import SelectedDonationCard from "../SelectedDonationCard/SelectedDonationCard";

const SelectedDonationCards = () => {
    const [donationCard, setDonationCard] = useState([]);
    const [showAll, setShowAll] = useState(false);
    
    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation')) || [];
  
            setDonationCard(donationItem);
            setShowAll(donationItem.length > 4);
          
          
        
    },[])
    const handleSeeAllClick = () => {
        setShowAll(false); 
      };
     
    return (
        <div>
               <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 px-[10%] pb-10">
                        {
                            donationCard?.slice(0, !showAll ? donationCard.length : 4).map((card,i)=> <SelectedDonationCard key={i} card={card}></SelectedDonationCard>
                               
                            )
                        }
                    </div>
       
                    { donationCard?.length > 4 && showAll && (
        <div className="flex justify-center items-center text-center my-4">
          <button
            className="rounded font-bold text-2xl text-white p-2 w-fit bg-green-600"
            onClick={handleSeeAllClick}
          >
            See All
          </button>
        </div>
      )}
        </div>
    );
};

export default SelectedDonationCards;