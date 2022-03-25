import React, { useEffect, useState } from 'react';
import Product from '../product/product';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, []);
    return (
        <div className='row m-2'>
            <div className=" col col-lg-9 col-md-9 ">
                <h4 className='mb-3'>Products</h4>
               <div className='row row-cols-1 row-cols-md-3 g-3'>
               {
                  products.map(product => <Product key={product.id}
                  product={product}></Product>) 
               }
               </div>

            </div>
            <div className="cart-container col-3">
                <h5>Selected Element</h5>
                </div>
        </div>
    );
};

export default Shop;