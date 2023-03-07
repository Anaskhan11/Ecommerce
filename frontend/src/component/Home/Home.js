import React from 'react';
import { CgMouse } from "react-icons/all";
import Product from "./Product.js";
import "./Header.css"
import MetaData from '../layout/MetaData.js';
import { getProduct } from "../../action/productAction"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';




const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])


    return (
        <>
            <MetaData title="BuyPerClick" />
            <div className='banner'>
                <p>Welcom to Ecommerece</p>
                <h1>Find Amazing Product Below</h1>

                <a href='#container'>
                    <button>
                        Scroll <CgMouse />
                    </button>

                </a>
            </div>
            <h2 className='homeHeading'> Featured Product </h2>
            <div className='container' id="container">
                {products && products.map(product => (
                    <Product product={product} />
                ))}

            </div>


        </>
    )
}

export default Home