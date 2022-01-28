// import products from '../data';
import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import './HomeScreen.css';
import ProductCard from './ProductCard';
import { Pizza } from '../types/pizza';
import { setPizzas } from '../redux/actions/pizzasActions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response: any = await axios
            .get<Pizza[]>('http://localhost:3333/api/pizza')
            .catch((err) => {
                console.error('err', err);
            })
        console.log(response.data);
        dispatch(setPizzas(response.data as Pizza[]))
    }
    const pizzas: Pizza[] = useSelector((state) => state.allPizzas.pizzas);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='products__wrapper'>
            {pizzas.map((pizza) => (
                <ProductCard key={pizza.id} pizza={pizza} />
            ))}
        </div>
    );
}

export default HomeScreen;