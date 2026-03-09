import './App.css';
import React from 'react';
import ProductList from './components/productList';
import CartItem from './components/cartItem';
import Cart from './components/cart';

function App() {
  return (
    <div className="main-container">
      <ProductList />
      <div className="basket">
        <Cart />
        <CartItem />
      </div>
    </div>
  );
}

export default App;
