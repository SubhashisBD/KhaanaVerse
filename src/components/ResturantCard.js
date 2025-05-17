import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} =props;
   const { 
        name, 
        cuisines, 
        costForTwo, 
        deliveryTime, 
        avgRating,
        cloudinaryImageId
    } = resData.data || resData;

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
             <h3>{name }</h3>
            <h4>{cuisines ? cuisines.join(", ") : ""}</h4>
            <h4>₹{costForTwo ? costForTwo/100 : ""} for two</h4>
            <h4>{deliveryTime || ""} minutes</h4>
            <h4>{avgRating || ""} stars</h4>
        </div>

    )
};

export default ResturantCard;