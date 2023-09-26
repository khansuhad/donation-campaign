import { useLoaderData } from "react-router-dom";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";
import { useEffect, useState } from "react";
import image from '../../assets/Clothing.png'

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
      <div className="hero  my-10 " style={{backgroundImage: 'url(https://i.ibb.co/41j8dL4/Rectangle-4287.png)'}}>
  <div className="hero-overlay bg-white bg-opacity-90 py-96"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="mx-auto">
    <div className="form-control text-center ">
    <h1 className="text-[#0B0B0B] font-bold text-3xl md:text-5xl lg:text-5xl my-10 ">I Grow By Helping People In Need</h1>
  <div className="input-group flex justify-center  ">
    <input type="text" placeholder="Search here…" className="input input-bordered md:w-96 lg:w-96" onChange={(e) => setSearchQuery(e.target.value)} />
    <button className="btn btn-square px-10 bg-[#FF444A] text-white" onClick={() => handleSearch() }>Search
    </button>
  </div>
</div>
    </div>
  </div>
</div>
            <div className=" flex flex-col justify-center items-center text-center lg:py-20 mb-20" >
                <div>
             
                </div>
 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-[10%]">
            {
            filteredDonations?.map((data) => (
              <HomeDonationCard donationData={data} key={data.id} />
            ))
            }
            </div>
        </div>
    );
};

export default Home;