import { Button } from './Button';
import { Check } from 'lucide-react';

const products = [
  {
    name: "Alphonso Mango",
    description: "The king of mangoes with rich, creamy texture",
    price: "$24.99",
    features: ["Premium quality", "Imported from India", "2-3 lbs pack"],
    popular: false
  },
  {
    name: "Ataulfo Mango",
    description: "Sweet honey-like flavor, perfect for smoothies",
    price: "$19.99",
    features: ["Fiber-rich", "Less stringy", "4-5 lbs pack"],
    popular: true
  },
  {
    name: "Kent Mango",
    description: "Large, juicy, and sweet with minimal fiber",
    price: "$22.99",
    features: ["Family size", "Long shelf life", "3-4 lbs pack"],
    popular: false
  }
];

export function Products() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Choose Your Variety
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Each variety offers a unique taste experience
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              {product.popular && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}
              <div className="h-48 bg-gradient-to-br from-orange-300 to-yellow-300"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-4xl font-bold text-orange-500 mb-6">{product.price}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={product.popular ? 'primary' : 'outline'} className="w-full">
                  Add to Cart
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
