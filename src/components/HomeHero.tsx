"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

 const HomeHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-pattern.svg')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Reveal Your Natural
              </span>
              <br />
              <span className="text-gray-800">Radiance</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover our curated collection of premium beauty products that enhance your natural beauty and boost your confidence.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-6 rounded-full hover:shadow-lg transition-all"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-pink-200 text-gray-700 px-8 py-6 rounded-full hover:border-pink-500"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-r from-pink-200 to-purple-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] opacity-20 animate-pulse" />
            <Image
              src="/api/placeholder/600/600"
              alt="Beauty Products"
              width={600}
              height={600}
              className="relative z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero