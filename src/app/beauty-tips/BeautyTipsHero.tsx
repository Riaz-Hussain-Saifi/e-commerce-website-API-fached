import React from 'react';
import  Image from 'next/image'
import { BookOpen } from 'lucide-react';

export const BeautyTipsHero = () => {
    return (
      <section className="relative bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-pink-500" />
                <span className="text-lg text-gray-600">Beauty Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Expert Beauty Tips
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Discover professional beauty secrets, tutorials, and trending techniques
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <Image src="/api/placeholder/200/150" alt="Skincare Tips" width={200} height={150} className="rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-800">Skincare Routine</h3>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <Image src="/api/placeholder/200/150" alt="Makeup Tips" width={200} height={150} className="rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-800">Makeup Tutorial</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };