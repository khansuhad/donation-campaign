import { useEffect, useState } from "react";
import SelectedDonationCard from "../SelectedDonationCard/SelectedDonationCard";

const SelectedDonationCards = () => {
    const [donationCard, setDonationCard] = useState();
    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation'));
        console.log(donationItem);
        if(donationItem){
            setDonationCard(donationItem)
        }
        
    },[])
    console.log(donationCard);
    console.log('suhad')
    return (
        <div>
               <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 px-[10%] pb-10">
                        {
                            donationCard?.map((card,i)=> <SelectedDonationCard key={i} card={card}></SelectedDonationCard>
                               
                            )
                        }
                    </div>
        </div>
    );
};

export default SelectedDonationCards;