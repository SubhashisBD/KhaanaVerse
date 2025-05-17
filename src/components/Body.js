import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {


    const [listOfResturants, setListOfResturant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async function () {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        let restaurant = json?.data?.cards.find(
            (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log(restaurant?.[0].info.name);
        setListOfResturant(restaurant);

    };

    // if(listOfResturants.length === 0){
    //     return <Shimmer/>
    // }

    return (listOfResturants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4.3);
                    setListOfResturant(filteredList);
                }
                }

                >
                    Top Rated Resturant</button>
            </div>
            <div className="res-container">
                {
                    listOfResturants?.map((restaurant, index) => (
                        <ResturantCard key={index} resData={restaurant?.info} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body; 