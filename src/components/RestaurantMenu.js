
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if (!resInfo || !resInfo.cards) {
        return <Shimmer />;
    }
    const info = resInfo?.cards[2]?.card?.card?.info;

    if (!info) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);
    if (!itemCards) return <Shimmer />;


    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}  -  {costForTwoMessage}</p>
            <div>
                {
                    categories.map((category) => <RestaurantCategory key={category.card.card.categoryId
                    } data={category.card.card} />)
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;