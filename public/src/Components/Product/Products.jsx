import React from 'react'
import './Products.css'
import { PRODUCTS__DATA } from '../../data/PRODUCTS__DATA'
function Products() {

    return (
        <div className="products">
            {
                PRODUCTS__DATA?.map(product => (
                    <div className="product__bar">
                        <h3>{product.ProductsName}</h3>
                        <img src={product.img} />
                        <p><a href="#">{product.More}</a></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
