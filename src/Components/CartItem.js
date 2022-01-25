import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({item}) => {
    const { removeItem } = useContext(CartContext);
    let opts = { format: '%v %s', symbol: "zł" };
    return (
       <li className="CartItem__item">
           <img src={item.image} alt="" />
           <div>
               {item.name} {formatCurrency(`${item.price}`, opts)}
           </div>
           <button className='CartItem_button' onClick={() => removeItem(item._id)}>Remove</button>
       </li>
    )
}

export default CartItem