import './Nav.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pizza } from '../types/pizza';

const Nav = () => {
    const basket: Pizza[] = useSelector((state) => state.cart.pizza);
    return (
        <nav >

            <div className="nav__left">
                <Link to={`/`} style={{ textDecoration: 'none' }}><span>Home</span></Link>


            </div>
            <div className="nav__middle">
            </div>
            <div className="nav__right">
                <div className="cart__icon">
                    <Link to={`/basket`} style={{ textDecoration: 'none' }}>
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                        {basket.length > 0 && <div className='item__count'><span>{basket.length}</span></div>}
                    </Link></div>
            </div>
        </nav>

    );
};

export default Nav;