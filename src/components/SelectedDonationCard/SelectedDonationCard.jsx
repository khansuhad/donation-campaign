import { Link } from "react-router-dom";


const SelectedDonationCard = ({card}) => {
    // console.log(card)
    const {id , title, image,cardBackgroundColor,titleBackgroundColor,titleColor,price,category} = card;
    return (
        <div className="flex rounded gap-5" style={{backgroundColor:cardBackgroundColor}}>
            <figure>
                <img src={image} alt=""  className="h-full"/>
            </figure>
            <div className="p-10 flex flex-col gap-3">
        
          <span className="card-title  rounded font-semibold p-2 w-fit" style={{backgroundColor:titleBackgroundColor, color:titleColor}}>{category}</span>
          <p className=" text-xl font-bold text-black" >{title}</p>
          <p className="font-bold text-lg " style={{color:titleColor}}>${price}</p>
        <div className="py-5">
            <Link to={`/${id}`} className=" rounded font-bold text-2xl text-white p-2 w-fit" style={{backgroundColor:titleColor}}>view Details</Link>
        </div>
            
            </div>
        </div>
    );
};

export default SelectedDonationCard;