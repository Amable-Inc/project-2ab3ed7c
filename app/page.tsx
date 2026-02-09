import { Sun } from "lucide-react";
import { Button } from "@/components/Button";
import { Testimonials } from "@/components/Testimonials";
import { Benefits } from "@/components/Benefits";
import { Products } from "@/components/Products";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { MobileMenu } from "@/components/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-30 rounded-b-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <Sun className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold text-orange-600">Mango</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Products</a>
          <a href="#benefits" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Benefits</a>
          <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">FAQ</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button size="md" className="hidden sm:block">
            Get Started
          </Button>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The King of <span className="text-orange-500">Tropical Fruits</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Experience the sweet, golden taste of paradise. Sustainably grown, perfectly ripened, 
            and delivered fresh to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Order Fresh Mangoes
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="w-full max-w-4xl mx-auto h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="text-center text-white">
              <Sun className="w-32 h-32 mx-auto mb-4 opacity-50 animate-pulse" />
              <p className="text-2xl font-semibold">Fresh Ripe Mangoes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <div id="benefits">
        <Benefits />
      </div>

      {/* Products Section */}
      <div id="products">
        <Products />
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Taste Paradise?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of happy customers enjoying fresh, premium mangoes delivered weekly.
          </p>
          <Button variant="secondary" size="lg">
            Start Your Subscription
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-6 h-6 text-orange-500" />
                <span className="text-xl font-bold">Mango</span>
              </div>
              <p className="text-gray-400">Fresh tropical fruits delivered with love.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Alphonso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ataulfo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kent</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Farms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 Mango. All rights reserved. Fresh tropical fruits delivered with love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
