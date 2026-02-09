import { Apple, Shield, Zap, Droplets } from 'lucide-react';

const benefits = [
  {
    icon: Apple,
    title: "Rich in Vitamin C",
    description: "Boosts immune system and skin health",
    stat: "67% Daily Value"
  },
  {
    icon: Shield,
    title: "Powerful Antioxidants",
    description: "Protects cells from damage",
    stat: "Beta-Carotene"
  },
  {
    icon: Zap,
    title: "Natural Energy",
    description: "Healthy sugars for sustained power",
    stat: "99 Calories"
  },
  {
    icon: Droplets,
    title: "High in Fiber",
    description: "Supports digestive health",
    stat: "3g per Serving"
  }
];

export function Benefits() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Nutritional Powerhouse
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Every bite is packed with essential nutrients
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="p-6 border-2 border-orange-200 rounded-xl hover:border-orange-400 transition-colors group">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-3xl font-bold text-orange-500 mb-2">{benefit.stat}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
