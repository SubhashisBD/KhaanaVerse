import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} =props;
   const { 
        name, 
        cuisines, 
        costForTwo, 
        sla, 
        avgRating,
        cloudinaryImageId
    } = resData.data || resData;

    return (
        <div className="m-4 p-4 w-[250px] h-[450px] bg-blue-100 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between hover:scale-105 hover:bg-red-400 transation-transform duration-300">
            <img className="w-full h-64 object-cover rounded-lg" src={CDN_URL+cloudinaryImageId} />
             <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo }</h4>
            <h4>{sla.slaString}</h4>
            <h4>{avgRating} ⭐</h4>
        </div>

    )
};

export default ResturantCard;