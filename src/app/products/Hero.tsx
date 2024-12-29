import React from 'react'
import { Label } from '@/components/ui/label'

const ProductsHero = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Collection
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Discover our range of handcrafted bags for every occasion
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Label htmlFor="category" className="sr-only">Category</Label>
            <div className="rounded-md border-gray-300 py-2 px-4 text-gray-700">
              <Label htmlFor="category" className="sr-only">Category</Label>
              <select id="category" title="Category" className="rounded-md border-gray-300 py-2 px-4 text-gray-700">
                <option>Category</option>
                <option>Backpacks</option>
                <option>Handbags</option>
                <option>Travel Bags</option>
              </select>
            </div>
            <div className="rounded-md border-gray-300 py-2 px-4 text-gray-700">
              <Label htmlFor="sort" className="sr-only">Sort By</Label>
              <select id="sort" title="Sort By" className="rounded-md border-gray-300 py-2 px-4 text-gray-700">
                <option>Sort By</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default ProductsHero