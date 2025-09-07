import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
    const [showItems,setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }
    return (
        <div>
            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordian Body */}
            <div className="w-6/12 mx-auto">
                {showItems && <ItemList key={data.itemCards.categoryId} items={data.itemCards} />}
            </div>

        </div>
    );
};
export default RestaurantCategory;