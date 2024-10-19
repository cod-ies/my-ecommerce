import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header({ cartItemCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              Custom Tee Co.
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/products" className="text-base font-medium text-gray-500 hover:text-gray-900">
              All Products
            </Link>
            <Link to="/products?category=hoodies" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Hoodies
            </Link>
            <Link to="/products?category=tshirts" className="text-base font-medium text-gray-500 hover:text-gray-900">
              T-shirts
            </Link>
            <Link to="/products?category=accessories" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Accessories
            </Link>
            <Link to="/custom-design" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Custom Design
            </Link>
          </nav>

          {/* Search bar */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="relative mr-3">
              <input
                type="text"
                className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                placeholder="Search..."
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            {/* User account */}
            <Link to="/account" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <UserIcon className="h-6 w-6" />
            </Link>

            {/* Shopping cart */}
            <Link to="/cart" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              <ShoppingCartIcon className="h-6 w-6 mr-2" />
              Cart ({cartItemCount})
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-indigo-600">Custom Tee Co.</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/products?category=hoodies" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Hoodies
                  </Link>
                  <Link to="/products?category=tshirts" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    T-shirts
                  </Link>
                  <Link to="/products?category=accessories" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Accessories
                  </Link>
                  <Link to="/custom-design" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Custom Design
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/account" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Account
                </Link>
                <Link to="/cart" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
