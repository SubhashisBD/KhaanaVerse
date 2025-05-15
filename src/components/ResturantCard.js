import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} =props;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL} />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(",")}</h4>
            <h4>{resData.data.costForTwo/100}</h4>
            <h4>{resData.data. deliveryTime}</h4>
            <h4>{resData.data.avgRating} </h4>
        </div>

    )
};

export default ResturantCard;