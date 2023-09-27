import { Link } from "react-router-dom";


const SelectedDonationCard = ({card}) => {
    // console.log(card)
    const {id , title, image,cardBackgroundColor,titleBackgroundColor,titleColor,price,category} = card;
    console.log(id)
    return (
        <div className="flex rounded h-60" style={{backgroundColor:cardBackgroundColor}}>
           
                <img src={image} alt=""  className="h-full  w-[50%] md:w-[30%] lg:w-52"/>
            
            <div className=" p-5  ">
        
          <p className="card-title  rounded font-semibold p-2  my-2 w-fit" style={{backgroundColor:titleBackgroundColor, color:titleColor}}>{category}</p>
          <p className=" md:text-2xl font-bold text-black my-2" >{title}</p>
          <p className="font-bold lg:text-lg my-2" style={{color:titleColor}}>${price}</p>
        <div className=" mt-6 lg:my-5 pb-2">
            <Link to={`/details/${id}`} className=" rounded font-bold relative bottom-3  md:text-2xl text-white p-2 w-fit" style={{backgroundColor:titleColor}}>VIEW DETAILS</Link>
        </div>
            
            </div>
        </div>
    );
};

export default SelectedDonationCard;