import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="bg-black text-white m-2 p-2 rounded-md" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto bg-gray-100 p-4 rounded-lg shadow-lg">
            {cartItems.length ===0 && <h1>Cart is Empty Add items to the Cart!</h1>}
                <ItemList  items = {cartItems}/>
            </div>
        </div>
    )
}

export default Cart;