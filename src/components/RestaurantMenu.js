import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([null]);

    const { resId } = useParams();
    // console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        // console.log(json);
        setResInfo(json?.data);

    }
    if (!resInfo || !resInfo.cards) {
        return <Shimmer />;
    }
    const info = resInfo?.cards[2]?.card?.card?.info;

    if (!info) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(itemCards);
    if (!itemCards) return <Shimmer />;


    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}  -  {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}

            </ul>
        </div>
    );
};

export default RestaurantMenu;