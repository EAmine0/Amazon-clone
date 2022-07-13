import React from 'react'

import './Product.css'

function Product({title, price, image}) {
    return (
        <div className='product'>

            <div className='product_info'>
                <span>{title}</span>
                <span className='product_price'>
                    <small>$</small>
                    <strong> {price} </strong>
                </span>
                <div className='product_rating'>
                    <p>*s</p>
                    <p>*</p>
                    <p>*</p>
                </div>
            </div>

            <div className='product_imagediv'>
                <img 
                className='product_image'
                src={image}
                alt=''/>
            </div>

            <div className='product_button'>
                <button className='product_addBasket'>Add to basket</button>
            </div>

            


        </div>
    )
}

export default Product
