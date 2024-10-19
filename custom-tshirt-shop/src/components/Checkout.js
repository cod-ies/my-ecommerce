import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

const steps = ['Shipping', 'Payment', 'Review'];

function Checkout({ cart, total, onOrderPlaced }) {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle order submission
      console.log('Order submitted:', { ...data, cart, total });
      onOrderPlaced();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName', { required: 'First name is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: 'Address is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  {...register('city', { required: 'City is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  {...register('zipCode', { required: 'ZIP code is required', pattern: { value: /^\d{5}$/, message: 'Invalid ZIP code' } })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  {...register('cardNumber', { required: 'Card number is required', pattern: { value: /^\d{16}$/, message: 'Invalid card number' } })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                  <input
                    type="text"
                    id="expirationDate"
                    {...register('expirationDate', { required: 'Expiration date is required', pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: 'Invalid expiration date (MM/YY)' } })}
                    placeholder="MM/YY"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.expirationDate && <p className="mt-1 text-sm text-red-600">{errors.expirationDate.message}</p>}
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    {...register('cvv', { required: 'CVV is required', pattern: { value: /^\d{3,4}$/, message: 'Invalid CVV' } })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>}
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Review</h2>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-gray-300 mt-2 pt-2 font-semibold">
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Please review your order and click "Place Order" to complete your purchase.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {index + 1}
              </div>
              <span className="ml-2 text-sm font-medium">{step}</span>
              {index < steps.length - 1 && (
                <ChevronRightIcon className="w-5 h-5 text-gray-400 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStepContent()}
        <div className="mt-8 flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              <ChevronLeftIcon className="w-5 h-5 inline-block mr-1" />
              Back
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {currentStep === steps.length - 1 ? 'Place Order' : 'Next'}
            {currentStep < steps.length - 1 && <ChevronRightIcon className="w-5 h-5 inline-block ml-1" />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
