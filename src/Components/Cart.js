import formatCurrency from 'format-currency';
import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import './Cart.css'
import CartItem from './CartItem';

const Cart = () => {
    
    const { showCart, cartItems, showHideCart } = useContext(CartContext);
    let opts = { format: '%v %s', symbol: "zł" };
    
    return (
        <>
        {showCart && (
            <div className='cart__wrapper'>
                <div style={{textAlign: 'right'}}>
                    <i style={{cursor: 'pointer'}} className='fa fa-times-circle' aria-hidden='true' onClick={showHideCart}></i>
                </div>
                <div className='cart__innerWrapper'>
                    {cartItems.length === 0 ? (<h4>Cart is empty</h4>) : (<ul> 
                        {cartItems.map(item => (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </ul>)}
                </div>
                <div className='Cart__cartTotal'>
                    <div>
                        Cart total
                    </div>
                    <div></div>
                    <div style={{marginLeft:5}}>
                        {formatCurrency(cartItems.reduce((amount, item) => item.price + amount, 0), opts)}
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Cart