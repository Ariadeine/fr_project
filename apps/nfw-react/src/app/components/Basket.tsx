import './Basket.css';
import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { clearCart, removePizzaFromCart } from '../redux/actions/pizzasActions';
import { useHistory } from "react-router-dom";

const Basket = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const basket = useSelector((state) => state.cart);
    const renderList = basket.pizza.map((pizza, index) => {
        return (
            <li key={`${pizza.id + index}`}><span className='Basket__name'> {pizza.name} </span>
            <button className='Basket__button' onClick={()=>dispatch(removePizzaFromCart(pizza, index))}> Remove</button></li>
        );
    });

    const orderPizza = async () => {
        console.log(basket);
        const response: any = await axios
            .post('http://localhost:3333/api/order', basket)
            .catch((err) => {
                console.error('err', err);
            })
        console.log(response);
        dispatch(clearCart())
        history.push('/order-completed');
    }
    return (
        <div className='basket__wrapper'>
            <h4 className='Basket__title'>Basket</h4>
            <div>
                {
                    basket.pizza.length ?
                        <ul>
                            <>{renderList}</>
                        </ul> :
                        <div>Basket is empty</div>
                }
            </div>
            {
                basket.pizza.length ?
                    <div className='basket__summary'>
                        Total: {basket.total}
                        <button className='Basket__button' onClick={orderPizza}>Order Pizza</button>
                    </div>
                    
                    : ''
            }

        </div>
    );
};

export default Basket;