import React, { useEffect, useState } from 'react';
import Product from '../product/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
import { addLocal, getLocal } from "../utilities/utilities";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);

    useEffect(() => {
        const storedCart = getLocal();
        setCarts(storedCart);
      }, []);

    const addToCart = (product) => {
        const newCart = getLocal();
        if (newCart.length !== 4) {
            const storedCart = addLocal(product);
            setCarts(storedCart);
        }
    };

    const Remove = (item) => {
        let newCart = [];
        let temp = 0;
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            newCart = JSON.parse(storedCart);
        }
        for (const items of newCart) {
            if (items.id === item.id) {
                break;
            }
            temp++;
        }
        newCart.splice(temp, 1);
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCarts(newCart);
    };

    const RandomGenerate = (localCart) => {
        const newItem = localCart[Math.floor(Math.random() * localCart.length)];

        let newCart = [];
        newCart.push(newItem);
        setRandom(newCart);
    };

    const blankCart = () =>{
        console.log('hello');
        localStorage.removeItem("cart");
        window.location.reload();
    };

    return (
        <div className="row">
            <div className=" col col-lg-8 col-md-8 ">
                <h4 className="mb-3 text-center">Products</h4>
                <div className="row row-cols-1 row-cols-md-3 ">
                    {
                        products.map(product => (<Product key={product.id}
                            product={product}
                            addToCart={addToCart}></Product>)
                        )}
                </div>

            </div>
            <div className=" text-center col-lg-4">
                <h5>Selected Element</h5>
                <Cart carts={carts} Remove={Remove} RandomGenerate={RandomGenerate} random={random} blankCart={blankCart} ></Cart>
                

            </div>
        </div>
    );
};

export default Shop;