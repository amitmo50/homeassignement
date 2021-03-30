import React from 'react';
import './ProductCards.css';
import ProductCard from './ProductCard/ProductCard';


const ProductCards = ({products, onAddToCart}) => {
    
    return (
        <div className="products-container">
            {products.map((product, index) => <ProductCard onAddToCart={onAddToCart} id={index} product={product} key={product.id}/>)}
        </div>
    )
}

export default ProductCards;