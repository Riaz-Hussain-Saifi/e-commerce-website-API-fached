import React from 'react';
import { Star, Gift, Sparkles } from "lucide-react";


const ContactHero = () => {
    return (
      <section className="bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Have questions? We're here to help you find the perfect beauty solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { icon: Star, text: "Beauty Advice" },
                { icon: Gift, text: "Order Support" },
                { icon: Sparkles, text: "Partnership" }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="bg-white p-6 rounded-xl shadow-md">
                  <Icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ContactHero