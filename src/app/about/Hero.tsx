import React from 'react';
import Image from 'next/image'

// About Hero Section
const AboutHero = () => (
  <div className="py-16 bg-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Crafting exceptional bags since 2010, we combine traditional craftsmanship 
            with modern design to create pieces that stand the test of time.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">15+</h3>
              <p className="text-gray-500">Years of Excellence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">50k+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 relative">
          <div className="relative h-64 sm:h-72 md:h-60 top-0 left-0 w-64 sm:w-72 md:w-60 rounded-lg ">
            <Image
              src="/About-Hero.png"
              alt="About our company"
              width={400}
              height={200}
              className="rounded-lg ml-20 sm:ml-32 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default AboutHero