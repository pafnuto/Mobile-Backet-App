import React from "react";
import './Basket.comp.scss'

function Basket (props)  {
    const { cartItems, add, remove } = props;
    const itemPrice = cartItems.reduce((a,c) => a + c.price * c.quantity, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    return (
    <div className="basketblock">
    <div>{ cartItems.length === 0 && <h2>Корзина пуста</h2>}</div>
    {cartItems.map((item)=>(
        <div key={item.id} className='row'>
            <div className='col-2'>{item.name}</div>
            <div className='col-2'>
                <button onClick={() => remove(item)} className='removeBtn'>-</button>
                <button onClick={() => add(item)} className='addBtn'>+</button>
            </div>
        <div className="col-2"> 
        {item.quantity} x ${parseFloat(item.price).toFixed(2)}</div>
        </div>
    ))}

    {cartItems.length !== 0 && (
          <>
            <div className="colItem">
              <div className="colItem2">Цена товара</div>
              <div className="colItem3">${itemPrice.toFixed(2)}</div>
            </div>
            <div className="colItem">
              <div className="colItem2">Налог</div>
              <div className="colItem3">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="colItem">
              <div className="colItem2">Пересыл</div>
              <div className="colItem3">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="colItem">
              <div className="colItem2">
                <b>Общий счёт:</b>
              </div>
              <div className="colItem3">
                <b>${totalPrice.toFixed(2)}</b>
              </div>
            </div>
            <div className="colItem">
              <button onClick={() => alert('Заказ оформлен')}>
                Оформить заказ
              </button>
            </div>
          </>
        )}
    </div>
    )};


export default Basket;