import { useState } from "react";
import SelectedDonationCard from "../SelectedDonationCard/SelectedDonationCard";

const SelectedDonationCards = () => {
    const [donationCard, setDonationCard] = useState();
    useEffect(()=>{
        const doantionItem = JSON.parse(localStorage.getItem('donation'))

        if(doantionItem){
            setFavorites(doantionItem)
        }
        
    },[])
    return (
        <div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        {
                            donationCard?.map((card,idx)=> <SelectedDonationCard key={idx} card={card}></SelectedDonationCard>
                               
                            )
                        }
                    </div>
        </div>
    );
};

export default SelectedDonationCards;