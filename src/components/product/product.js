import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
    const {name, img, price } = props.product;
    const {addToCart} = props;

    return (
        <div className='card'>
            <img className='rounded mx-auto d-block m-3 img-fluid p-4' src={img} alt=""/>

            <div>
                <h6>{name}</h6>
                <p>${price}</p>
            </div>
            <button onClick={() => addToCart(props.product)}>
                <p>
                    Add To Cart 
                </p>

            </button>
            
        </div>
    );
};

export default Product;