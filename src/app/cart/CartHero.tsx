import React from 'react';
import { ShoppingBag } from 'lucide-react';

const CartHero = () => {
    return (
      <section className="bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Your Shopping Cart
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Review your selected beauty products before checkout
            </p>
          </div>
        </div>
      </section>
    );
  };

  export default CartHero