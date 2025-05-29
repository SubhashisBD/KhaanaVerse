import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_MAIN } from "../utils/constants";

const Body = () => {

    const [listOfResturants, setListOfRestaurant] = useState([]);
    const [fillterdRestaurant, setFillterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestuarantCardPromoted = withPromotedLabel(ResturantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async function () {
        const data = await fetch(SWIGGY_MAIN);
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
        <div className="body bg-[#fbf7e4]">
            <div className="flex">
                <div className=" m-4 p-4 space-x-5">
                    <input type="text" className="border-2 border-solid border-black" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button className="px-4 py-1.5 bg-[#4ADE80] hover:bg-[#22C55E] text-white font-semibold rounded-md shadow-lg" onClick={() => {
                        const filterdRestaurant = listOfResturants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFillterdRestaurant(filterdRestaurant);


                    }}

                    >Search</button>
                </div>

                <div className="m-4 p-4 flex items-center">
                    <button className="px-3 py-1.5 bg-[#4ADE80] hover:bg-[#22C55E] text-white font-semibold rounded-md shadow-lg" onClick={() => {
                        const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4.5);
                        setListOfRestaurant(filteredList);
                        setFillterdRestaurant(filteredList);
                    }
                    }
                    >
                        Top Rated Resturant</button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {
                    fillterdRestaurant?.map((restaurant) => (
                        <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
                            {restaurant.info.promoted ? (<RestuarantCardPromoted resData={restaurant?.info} />) :
                                (<ResturantCard resData={restaurant?.info} />)}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;