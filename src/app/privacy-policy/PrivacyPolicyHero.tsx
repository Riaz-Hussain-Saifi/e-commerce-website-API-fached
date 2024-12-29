import React from 'react'
import { Shield } from 'lucide-react';

export const PrivacyPolicyHero = () => {
    return (
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              We're committed to protecting your personal information and privacy
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "Data Protection",
                "Information Usage",
                "Security Measures",
                "Your Rights"
              ].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-800">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };