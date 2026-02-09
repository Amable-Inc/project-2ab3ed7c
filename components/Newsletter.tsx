'use client';

import { useState, FormEvent } from 'react';
import { Button } from './Button';
import { Mail, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (email && email.includes('@')) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-400">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stay Fresh with Our Newsletter
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Get exclusive deals, mango recipes, and nutrition tips delivered weekly
        </p>
        
        {status === 'success' ? (
          <div className="bg-white rounded-full px-8 py-4 flex items-center justify-center gap-3 max-w-md mx-auto">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-900 font-semibold">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              required
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
        )}
        
        {status === 'error' && (
          <p className="text-white mt-4">Please enter a valid email address</p>
        )}
      </div>
    </section>
  );
}
