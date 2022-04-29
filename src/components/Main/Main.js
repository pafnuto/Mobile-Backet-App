import React from "react";
import Product from "../Product/Product";
import './Main.comp.scss';

function Main (props)  {
    const { products, add, remove} = props;
    return (
    <div className='mainblock'>
        <h2>Продукция</h2>
        {products.map((product)=>(
            <Product key={product.id} product={product} add ={add} remove={remove}></Product>
        ))}
    </div>
    
    );
}

export default Main;