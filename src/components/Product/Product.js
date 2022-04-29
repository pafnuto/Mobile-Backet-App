import React from 'react';
import data from '../Data/Data'

export default function product(props) {
  const { product, add } = props;
  return (
    <div>
      <img className="productblock" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={()=>add(product)}>Добавить в корзину</button>
      </div>
    </div>
  );
}