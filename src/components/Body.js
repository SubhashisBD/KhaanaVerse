import ResturantCard from "./ResturantCard";
import { useState } from "react";

const Body = () => {


    const [listOfResturants, setListOfResturant] = useState([
        {
            data: {
                id: "334455",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "3.8",
            },
        },
        {
            data: {
                id: "334466",
                name: "MCD",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.5",
            },
        },
        {
            data: {
                id: "334477",
                name: "ABC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.5",
            },
        },
    ]);

    return (
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
                    listOfResturants.map((resturant) => (
                        <ResturantCard key={resturant.data.id} resData={resturant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body; 