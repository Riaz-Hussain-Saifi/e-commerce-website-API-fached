import React from 'react'
import { Button } from "@/components/ui/button";

const ShopHero = () => {
  return (
    <div>
        <section className="bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Shop Our Collection
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Explore our wide range of premium beauty products, from skincare to makeup
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {['Skincare', 'Makeup', 'Haircare', 'Fragrance'].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-pink-200 text-gray-700 rounded-full hover:border-pink-500"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ShopHero