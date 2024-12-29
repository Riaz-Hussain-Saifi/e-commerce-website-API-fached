import React from 'react';
import Image from 'next/image';

const NewInHero = () => {
    return (
      <section className="bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Just Arrived
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Be the first to experience our latest beauty innovations
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/api/placeholder/200/200" width={200} height={200} alt="New Product 1" className="rounded-lg shadow-lg" />
              <Image src="/api/placeholder/200/200" width={200} height={200} alt="New Product 2" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default NewInHero