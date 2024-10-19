import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, color, size) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === product.id && item.color === color && item.size === size
      );
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.color === color && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, color, size, quantity: 1 }];
    });
  };

  const updateQuantity = (id, color, size, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id, color, size) => {
    setCartItems(prevItems => prevItems.filter(item => 
      !(item.id === id && item.color === color && item.size === size)
    ));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              total={cartTotal}
            />
          } />
          <Route path="/checkout" element={
            <Checkout cart={cartItems} total={cartTotal} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;