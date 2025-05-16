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
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5726&lng=88.3639&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfResturant(json?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.resturants);
    };

    // if(listOfResturants.length === 0){
    //     return <Shimmer/>
    // }

    return (listOfResturants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfResturants.filter((res) => res.data.avgRating > 4);
                    setListOfResturant(filteredList);
                }
                }

                >
                    Top Rated Resturant</button>
            </div>
            <div className="res-container">
                {
                    listOfResturants?.map((resturant, index) => (
                        <ResturantCard key={index} resData={resturant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body; 