import React from 'react';

const Product = (props) => {
    const {name, img, price } = props.product;

    return (
        <div>
            <img src={img} alt=""></img>
            <div>
                <h6>{name}</h6>
                <p>${price}</p>
            </div>
            <button >
                <p>
                    Add To Cart 
                </p>

            </button>
            
        </div>
    );
};

export default Product;