import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfResturants, setListOfRestaurant] = useState([]);
    const [fillterdRestaurant, setFillterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async function () {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        let restaurant = json?.data?.cards.find(
            (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurant);
        setFillterdRestaurant(restaurant);
 };
        const OnlineStatus = useOnlineStatus();
        if (OnlineStatus === false)
            return (
                <h1>Please Connect Your Internet</h1>
            );

   

    return (listOfResturants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button onClick={() => {
                        const filterdRestaurant = listOfResturants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFillterdRestaurant(filterdRestaurant);


                    }}

                    >Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4.5);
                    setListOfRestaurant(filteredList);
                    setFillterdRestaurant(filteredList);
                }
                }
                >
                    Top Rated Resturant</button>
            </div>
            <div className="res-container">
                {
                    fillterdRestaurant?.map((restaurant) => (
                        <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}><ResturantCard resData={restaurant?.info} /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body; 