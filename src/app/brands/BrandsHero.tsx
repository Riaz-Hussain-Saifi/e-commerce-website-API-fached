import React from 'react';
import Image from 'next/image';

const BrandsHero = () => {
    return (
      <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Our Premium Brands
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Discover luxury beauty brands that define excellence
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((brand) => (
                <div key={brand} className="bg-white p-6 rounded-xl shadow-md">
                  <Image src="/api/placeholder/120/60" alt={`Brand ${brand}`} width={120} height={60} className="mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default BrandsHero;