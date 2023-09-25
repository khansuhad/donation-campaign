import { useLoaderData } from "react-router-dom";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";
import { useEffect, useState } from "react";

const Home = () => {
   const donationdata = useLoaderData();

   const [searchQuery, setSearchQuery] = useState("");
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [isSearchClicked , setIsSearchClicked] = useState(false)

 const handleSearch = () =>{
    setIsSearchClicked(true);
   
 }

 useEffect( () => {
  
console.log(isSearchClicked)
    if(isSearchClicked){
       
              const filtered = donationdata.filter((data) =>
                data.category.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setFilteredDonations(filtered);
             
         
    }
 else if(searchQuery.trim() === "") {
    setFilteredDonations(donationdata)
 };
 
  },[searchQuery,donationdata,isSearchClicked]);
     
  useEffect(() => {
        setIsSearchClicked(false)
  },[searchQuery])
    return (
        <div>
          
            <div className=" flex flex-col justify-center items-center text-center py-40 mb-20">
                <div>
                <h1 className="text-[#0B0B0B] font-bold text-5xl my-10">I Grow By Helping People In Need</h1>
                </div>
            <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search here…" className="input input-bordered w-96" onChange={(e) => setSearchQuery(e.target.value)} />
    <button className="btn btn-square px-10 bg-[#FF444A] text-white" onClick={() => handleSearch() }>Search
    </button>
  </div>
</div>
            </div>
            <div className="grid grid-cols-4 gap-5 px-[10%]">
            {
            filteredDonations.map((data) => (
              <HomeDonationCard donationData={data} key={data.id} />
            ))
            }
            </div>
        </div>
    );
};

export default Home;