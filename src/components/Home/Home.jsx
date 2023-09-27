import { useLoaderData } from "react-router-dom";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";
import { useEffect, useState } from "react";


const Home = () => {
   

  const donationData = useLoaderData();
  const [searchQuery,setSearchQuery] = useState("");
  const [filterData,setFilterData] = useState(donationData)
  
  const handleSearch = () =>{
    const search = donationData?.filter((item) => item?.category?.toLowerCase()?.trim()?.includes(searchQuery?.toLowerCase()?.trim()) );
    setFilterData(search);
   
 } 
    return (
        <div>
      <div className="hero  my-10 " style={{backgroundImage: 'url(https://i.ibb.co/41j8dL4/Rectangle-4287.png)'}}>
  <div className="hero-overlay bg-white bg-opacity-90 py-96"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="mx-auto">
    <div className="form-control text-center ">
    <h1 className="text-[#0B0B0B] font-bold text-3xl md:text-5xl lg:text-5xl my-10 ">I Grow By Helping People In Need</h1>
  <div className="input-group flex justify-center  ">
    <input type="text" placeholder="Search here…" className="input input-bordered md:w-96 lg:w-96 text-black" onChange={(e) => setSearchQuery(e.target.value)} />
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
            filterData?.map((data) => (
              <HomeDonationCard donationData={data} key={data.id} />
            ))
            }
            </div>
        </div>
    );
};

export default Home;