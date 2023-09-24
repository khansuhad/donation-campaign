import { Link } from "react-router-dom";

const HomeDonationCard = ({ donationData }) => {
  const {
    id,
    image,
    title,
    catagory,
    description,
    price,
    titleColor,
    titleBackgroundColor,
    cardBackgroundColor,
  } = donationData;

  return (
  
   <Link to={`/${id}`}
        className={`card card-compact shadow-xl bg-red-200`}
      >
        <figure >
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title bg-red-300 rounded text-red-500 font-semibold p-3">{title}</h2>
          <p className="text-red-500 font-semibold">{description}</p>
        </div>
      </Link>
   
   
  );
};

export default HomeDonationCard;
