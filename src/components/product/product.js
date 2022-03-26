import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './product.css'


const Product = (props) => {
    const {name, img, price } = props.product;
    const {addToCart} = props;

    return (
        <div className="card mx-1 my-1">
            <img className="rounded mx-auto d-block m-3 img-fluid p-4" src={img} alt=""/>
            <div className="card-body text-center">
                <h6 className="cart-title">{name}</h6>
                <p className="cart-title">${price}</p>
            </div>
            <button className='btcn' onClick={() => addToCart(props.product)}>
                <p>
                    Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </p>

            </button>
            
        </div>
    );
};

export default Product;