import React from "react";

export default function ProductCarta({ products }) {
  return products.map((product) => {
    return (
      <div id='cartaContainer' className='carta__template-container'>
        <img className='template-img' src={`http://mamaq.herokuapp.com/${product.imagen.path}`} alt='IMG' />
        <span className='template-name-price'>
          <h3 className='template-product'>{product.name}</h3>
          <p className='template-price'>{product.price}</p>
        </span>
        <p className='template-description'>{product.description}</p>
        <p className='template-category'>{product.category}</p>
      </div>
    );
  });
}
