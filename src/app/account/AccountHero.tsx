import React from 'react';
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export const AccountHero = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 mb-6">
            <User className="w-12 h-12 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Your Beauty Profile
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Manage your orders, rewards, and personalized beauty recommendations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {['Orders', 'Rewards', 'Favorites', 'Settings'].map((item) => (
              <Button
                key={item}
                variant="outline"
                className="border-pink-200 text-gray-700 rounded-full hover:border-pink-500"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
