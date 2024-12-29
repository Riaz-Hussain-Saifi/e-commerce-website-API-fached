import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const OrderTrackingHero = () => {
    return (
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Search className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Track Your Order
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Keep track of your beauty essentials with real-time delivery updates
            </p>
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter your order number"
                  className="flex-1 rounded-full border-pink-200"
                />
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full">
                  Track
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };