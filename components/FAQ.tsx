'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How do you ensure mangoes arrive perfectly ripe?",
    answer: "We carefully time our harvests and shipments to ensure mangoes arrive at optimal ripeness. Each order is packed with care and shipped via expedited delivery to maintain freshness."
  },
  {
    question: "Are your mangoes really organic?",
    answer: "Yes! All our mangoes are certified organic, grown without synthetic pesticides, herbicides, or fertilizers. We work with certified organic farms that follow strict sustainable practices."
  },
  {
    question: "What's the shelf life once I receive them?",
    answer: "Fresh mangoes typically last 5-7 days at room temperature. For longer storage, refrigerate them for up to 2 weeks. We recommend enjoying them at room temperature for best flavor."
  },
  {
    question: "Can I choose my delivery date?",
    answer: "Absolutely! During checkout, you can select your preferred delivery date. For subscriptions, you can customize delivery frequency and pause or skip shipments anytime."
  },
  {
    question: "What if I'm not satisfied with my order?",
    answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with your mangoes, contact us within 48 hours of delivery for a full refund or replacement."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Everything you need to know about our mangoes
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <article key={index} className="border-2 border-orange-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={cn(
                    "w-6 h-6 text-orange-500 transition-transform flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-48" : "max-h-0"
                )}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
