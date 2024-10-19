import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logoDesigns = [
  { id: 1, name: "Minimalist Logo", image: "https://via.placeholder.com/300x100?text=Logo+1" },
  { id: 2, name: "Vintage Emblem", image: "https://via.placeholder.com/300x100?text=Logo+2" },
  { id: 3, name: "Modern Abstract", image: "https://via.placeholder.com/300x100?text=Logo+3" },
  { id: 4, name: "Retro Badge", image: "https://via.placeholder.com/300x100?text=Logo+4" },
  { id: 5, name: "Geometric Design", image: "https://via.placeholder.com/300x100?text=Logo+5" },
  { id: 6, name: "Typography Logo", image: "https://via.placeholder.com/300x100?text=Logo+6" },
];

const tshirtDesigns = [
  { id: 1, name: "Eco-Friendly White Tee", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", eco: true },
  { id: 2, name: "Vintage-Inspired Black", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", trending: true },
  { id: 3, name: "Limited Edition Red", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", limited: true },
  { id: 4, name: "Custom Design Blue", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", custom: true },
  { id: 5, name: "Sustainable Green Tee", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", eco: true },
  { id: 6, name: "Summer Collection Yellow", image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", seasonal: true }
];

function Hero() {
  const logoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const tshirtSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Carousel */}
        <div className="mb-12 overflow-hidden">
          <Slider {...logoSliderSettings}>
            {logoDesigns.map((logo) => (
              <div key={logo.id} className="px-2">
                <img src={logo.image} alt={logo.name} className="w-full h-24 object-contain" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Featured T-Shirt Designs */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tshirtDesigns.slice(0, 3).map((design) => (
            <div key={design.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
              <img src={design.image} alt={design.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{design.name}</h3>
                {design.eco && <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">Eco-Friendly</span>}
                {design.trending && <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">Trending</span>}
                {design.limited && <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">Limited Edition</span>}
                {design.custom && <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">Custom Design</span>}
                {design.seasonal && <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">Seasonal</span>}
              </div>
            </div>
          ))}
        </div>

        {/* More T-Shirt Designs Slider */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">More Designs</h2>
          <div className="overflow-hidden">
            <Slider {...tshirtSliderSettings}>
              {tshirtDesigns.map((design) => (
                <div key={design.id} className="px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={design.image} alt={design.name} className="w-full h-40 object-cover" />
                    <p className="mt-2 p-2 text-center text-gray-600">{design.name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Sustainability and Ethics Section */}
        <div className="mt-12 bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
          <p className="text-gray-600">We're dedicated to ethical and sustainable practices. Our t-shirts are made from eco-friendly materials, and we ensure fair labor practices throughout our supply chain.</p>
        </div>

        {/* User-Generated Content Call-to-Action */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Submit Your Design</h2>
          <p className="text-gray-600">Have a great t-shirt idea? Submit your design and it could be featured in our store!</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;