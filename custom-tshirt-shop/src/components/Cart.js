import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';

function Cart({ cartItems, updateQuantity, removeItem, total }) {
  return (
    <div className="my-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-700">
                  <MinusIcon className="h-5 w-5" />
                </button>
                <span className="mx-2 text-gray-700">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-700">
                  <PlusIcon className="h-5 w-5" />
                </button>
                <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
          </div>
          <Link 
            to="/checkout"
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 inline-block text-center"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
