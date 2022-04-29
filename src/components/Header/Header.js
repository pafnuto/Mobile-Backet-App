import React from "react";
import './Header.comp.scss';

function Header (props)  {
    const {countCartItems} = props;
return( 
    <div className="topblock">
   
    <a href='#/'><h1>Магазин мобильных телефонов</h1></a>
    <a href='#/cart'>Корзина {''}
    {countCartItems ? (<button className="btnQty">{countCartItems}</button>) : ('')}
    </a>
    </div>
    );
}

export default Header;