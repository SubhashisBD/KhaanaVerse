import {CDN_URL} from "../utils/constants";

const RestaurantCard =( )=>{
    return(
        <div className="res-card">
            <img className="res-logo"src={CDN_URL}/>
            <h3>Meghna Foods</h3> 
            <h4>Biryani,North Indian,Asian</h4>
            <h4>4.4 start</h4>
            <h4>38 minutes </h4>
        </div>
        
    )
};

export default RestaurantCard;