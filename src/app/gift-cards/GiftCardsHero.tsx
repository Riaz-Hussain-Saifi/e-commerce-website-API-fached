import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GiftCardsHero = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Gift className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Gift the Glow
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Share the gift of beauty with our digital and physical gift cards
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "$50", bg: "from-pink-100 to-pink-200" },
              { value: "$100", bg: "from-purple-100 to-purple-200" },
              { value: "$200", bg: "from-pink-200 to-purple-200" }
            ].map((card) => (
              <div
                key={card.value}
                className={`bg-gradient-to-r ${card.bg} p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
              >
                <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                <Button className="mt-4 bg-white text-gray-800 hover:bg-gray-50">
                  Select
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};