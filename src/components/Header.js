
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

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
                    <li  className="cursor-pointer"><Link to="/contact">Contact</Link></li>
                    <li  className="cursor-pointer">Cart</li>
                    <button className="login border-x-zinc-950" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
};

export default Header; 