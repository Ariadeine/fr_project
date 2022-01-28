import './ProductCard.css';
import React from 'react'
import { useDispatch } from "react-redux";
import { addPizzaToCart } from '../redux/actions/pizzasActions';

const ProductCard = ({ pizza }) => {
    const dispatch = useDispatch();
    return (
        <div className='productCard__wrapper'>
            <div className='productCard__items'>
                <img className='productCard__image' src='https://ocdn.eu/pulscms-transforms/1/p88k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STBc0DFM0BvJMJpjEwMThmZQaBoTAB/domowa-pizza.jpg' alt='' />
                <h4>{pizza.name}</h4>
                <div className='ProductCard__price'><h5>{`${pizza.price} zł`}</h5></div>
                <button className='ProductCard__button' onClick={() => dispatch(addPizzaToCart(pizza))}>Add to basket</button>
            </div>
        </div>
    );
};

export default ProductCard;