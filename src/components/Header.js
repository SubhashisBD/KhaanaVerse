
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext)

    // Subscribing to the store using a Selector (Basically to read how many items present in the slice of Redux cart store)
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="bg-[#FFFDF4] border-b border-gray-200 shadow-sm p-4 flex justify-between items-center">
            <div className="w-28">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items" >
                <ul className="flex space-x-6 text-lg items-center">
                    <li>OnlineStatus:{OnlineStatus ? "✅" : "🔴"}</li>
                    <li className="cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer"><Link to="/about">About Us</Link></li>
                    <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
                    <li className="cursor-pointer font-bold"><Link to="/cart">Cart - ({cartItems.length}items)</Link></li>
                    <button className="login border-x-zinc-950" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                    <li className="font-medium">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
};

export default Header; 