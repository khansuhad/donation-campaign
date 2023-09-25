import { Link } from "react-router-dom";

const HomeDonationCard = ({ donationData }) => {
  const {
    id,
    image,
    title,
    category,
    description,
    price,
    titleColor,
    titleBackgroundColor,
    cardBackgroundColor,
  } = donationData;

  return (
  
   <Link to={`/${id}`}
        className={`card shadow-xl mb-10 `} style={{backgroundColor:cardBackgroundColor}}
      >
        <figure className="h-52 p-5">
          <img src={image} alt="Shoes" className="w-full  h-full" />
        </figure>
        <div className="card-body">
          <span className="card-title  rounded font-semibold p-2 w-fit" style={{backgroundColor:titleBackgroundColor, color:titleColor}}>{category}</span>
          <p className="text-red-500 text-xl font-semibold" style={{color:titleColor}}>{title}</p>
        </div>
      </Link>
   
   
  );
};

export default HomeDonationCard;
