'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const images = [
  { id: 1, alt: "Fresh ripe mango cut in half", color: "from-orange-400 to-yellow-400" },
  { id: 2, alt: "Mango smoothie bowl with toppings", color: "from-yellow-400 to-orange-300" },
  { id: 3, alt: "Whole mangoes on wooden table", color: "from-orange-500 to-red-400" },
  { id: 4, alt: "Mango slices arranged beautifully", color: "from-amber-400 to-orange-400" },
  { id: 5, alt: "Mango tree in organic farm", color: "from-green-400 to-yellow-400" },
  { id: 6, alt: "Mango dessert preparation", color: "from-yellow-300 to-orange-500" }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Visual Journey
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Explore the beauty of our mangoes
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={cn(
                "w-full h-full bg-gradient-to-br transition-transform group-hover:scale-110",
                image.color
              )}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="max-w-4xl w-full aspect-square rounded-2xl overflow-hidden">
            <div className={cn(
              "w-full h-full bg-gradient-to-br",
              images.find(img => img.id === selectedImage)?.color
            )} />
          </div>
        </div>
      )}
    </section>
  );
}
