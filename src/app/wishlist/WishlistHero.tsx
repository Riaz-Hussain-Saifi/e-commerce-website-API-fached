import React from 'react';
import { Heart } from 'lucide-react';

const WishlistHero = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Your Wishlist
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Keep track of all your favorite beauty products in one place
            </p>
          </div>
        </div>
      </section>
    );
  };

export default WishlistHero
