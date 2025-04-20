import RestaurantCard from "./ResturantCard";

 const Body =()=>{
    return(
    <div className="body">
        <div className="filter">Search</div>
        <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
    )
}

export default Body;