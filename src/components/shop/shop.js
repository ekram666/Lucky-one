import React, { useEffect, useState } from 'react';
import Product from '../product/product';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Cart from '../Cart/Cart';
import {addLocal , getLocal} from "../utilities/utilities";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect( ()=> {
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, []);

    const addToCart = (product) => {
        const newCart = getLocal();
        if(newCart.length !== 4){
            const storedCart = addLocal(product);
            setCarts(storedCart);
        }
    }
    return (
        <div className='row'>
            <div className=" col col-lg-9 col-md-9 ">
                <h4 className='mb-3'>Products</h4>
               <div className='row row-cols-1 row-cols-md-3 '>
               {
                  products.map(product => (<Product key={product.id}
                  product={product}
                  addToCart={addToCart}></Product>) 
               )}
               </div>

            </div>
            <div className=" col-3">
                <h5>Selected Element</h5>
                <Cart carts={carts} ></Cart>
                </div>
        </div>
    );
};

export default Shop;