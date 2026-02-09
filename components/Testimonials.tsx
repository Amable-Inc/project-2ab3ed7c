import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Health Enthusiast",
    content: "The best mangoes I've ever tasted! Sweet, juicy, and perfectly ripe every time. The subscription service is so convenient.",
    rating: 5,
    image: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Chef",
    content: "As a professional chef, quality matters. These organic mangoes are exceptional - perfect for both cooking and fresh eating.",
    rating: 5,
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Fitness Coach",
    content: "I recommend these to all my clients. Packed with nutrients and naturally energizing. Love the sustainable farming practices!",
    rating: 5,
    image: "ER"
  }
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Join thousands of happy mango lovers
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
