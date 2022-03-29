import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    const {
        img, 
        name, 
        price, 
        ratings, 
        seller, 
    } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div className='pd-name-price'>
                    <p className='pd-name'>{name}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className='pd-seller-ratings'>
                    <p><small>Seller: {seller} </small></p>
                    <p><small>Ratings: {ratings} </small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;