import { useLoaderData } from "react-router-dom";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";

const Home = () => {
   const donationdata = useLoaderData();
  
    return (
        <div>
            {/* <div className="">
                <h1 className="text-[#0B0B0B] font-bold text-5xl my-10">I Grow By Helping People In Need</h1>
                <div className="items-center flex justify-center">
                <div class="form-control">
  <div class="input-group ">
    <input type="text" placeholder="Search here...." class="input input-bordered " />
    <button class="btn  p-4 bg-[#FF444A] text-white" className="p-4">Search</button>
  </div>
</div>
                </div>
            </div> */}
            <div className=" flex flex-col justify-center items-center text-center py-40 mb-20">
                <div>
                <h1 className="text-[#0B0B0B] font-bold text-5xl my-10">I Grow By Helping People In Need</h1>
                </div>
            <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search here…" className="input input-bordered w-96" />
    <button className="btn btn-square px-10 bg-[#FF444A] text-white">Search
    </button>
  </div>
</div>
            </div>
            <div className="grid grid-cols-4 gap-5 px-[10%]">
                {
                    donationdata.map(data => <HomeDonationCard donationData={data}></HomeDonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;