import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Basket from './components/Basket/Basket';
import data from './components/Data/Data';
import product from './components/Product/Product';

function App() {
  const {products} = data;
  const [cartItems, setCartItems]=useState([]);
  //кнопка добавления продукта
  const add = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist){
      setCartItems
      (cartItems.map((x) => x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x ));
      } else {
        setCartItems([...cartItems, {...product, quantity: 1}]);
      }
    };
//кнопка убрать продукт из корзины
    const remove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.quantity === 1){
        setCartItems
        (cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems
          (cartItems.map((x) => x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x ));
        }
      };
  return (
    <div className="App">
    <Header countCartItems={cartItems.length}/>
    <div className='bottomblock'>
    <Main add ={add} products = {products} />
    <Basket add ={add} remove = {remove} cartItems={cartItems}/>
    </div>
    </div>
  );
}


export default App;
