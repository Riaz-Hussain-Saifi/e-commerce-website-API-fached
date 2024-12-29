import React from "react";
import { Crown, Award } from "lucide-react";

export const BeautyRewardsHero = () => {
    return (
      <section className="bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Crown className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Beauty Rewards
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Earn points on every purchase and unlock exclusive beauty perks
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { level: "Silver", points: "0-500", perks: "Free shipping" },
                { level: "Gold", points: "501-1000", perks: "5% cashback" },
                { level: "Platinum", points: "1001+", perks: "Early access" }
              ].map((tier) => (
                <div key={tier.level} className="bg-white p-8 rounded-xl shadow-md">
                  <Award className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tier.level}</h3>
                  <p className="text-gray-600 mb-4">{tier.points} points</p>
                  <p className="text-sm text-gray-500">{tier.perks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  