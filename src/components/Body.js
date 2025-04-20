import RestaurantCard from "./ResturantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => { 
                    console.log("button cicked");
                 }}
                >
                    Top Rated Resturant</button>
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

export default Body; 