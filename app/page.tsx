import { Leaf, Heart, Sparkles, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Sun className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold text-orange-600">Mango</span>
        </div>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The King of <span className="text-orange-500">Tropical Fruits</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Experience the sweet, golden taste of paradise. Sustainably grown, perfectly ripened, 
            and delivered fresh to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all hover:scale-105 shadow-lg">
              Order Fresh Mangoes
            </button>
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all border-2 border-orange-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 relative">
          <div className="w-full max-w-4xl mx-auto h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <Sun className="w-32 h-32 mx-auto mb-4 opacity-50" />
              <p className="text-2xl font-semibold">Fresh Ripe Mangoes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Why Choose Our Mangoes?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Organic</h3>
              <p className="text-gray-600 leading-relaxed">
                Grown without pesticides or chemicals, our mangoes are naturally sweet and healthy for you and the planet.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutrient Rich</h3>
              <p className="text-gray-600 leading-relaxed">
                Packed with vitamins A, C, and E, plus fiber and antioxidants to boost your immune system and energy.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect Ripeness</h3>
              <p className="text-gray-600 leading-relaxed">
                Hand-picked at peak ripeness and delivered fresh, ensuring maximum flavor and sweetness in every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Taste Paradise?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of happy customers enjoying fresh, premium mangoes delivered weekly.
          </p>
          <button className="px-10 py-5 bg-white text-orange-600 rounded-full text-lg font-bold hover:bg-orange-50 transition-all hover:scale-105 shadow-xl">
            Start Your Subscription
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold">Mango</span>
          </div>
          <p className="text-gray-400">© 2024 Mango. Fresh tropical fruits delivered with love.</p>
        </div>
      </footer>
    </div>
  );
}
