import React from 'react'
import { Truck, Box, Clock } from 'lucide-react';

export const ShippingReturnsHero = () => {
    return (
      <section className="bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-8 h-8 text-purple-500" />
                <span className="text-lg text-gray-600">Delivery & Returns</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Shipping & Returns
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Fast delivery and hassle-free returns for your peace of mind
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Box, title: "Free Shipping", text: "On orders over $50" },
                { icon: Clock, title: "30-Day Returns", text: "Easy returns process" }
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl shadow-md">
                  <item.icon className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };