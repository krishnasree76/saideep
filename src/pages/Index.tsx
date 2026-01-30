import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutFounder from '@/components/AboutFounder';
import BulkOrders from '@/components/BulkOrders';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Checkout from '@/components/Checkout';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import cartImage from '@/assets/milk-bottle.jpg';

const Index = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      
      {/* ✅ Pass cart opener to Header */}
      <Header onCartClick={() => setIsCheckoutOpen(true)} />

      <main>
        <Hero />
        <ProductsSection />

        {/* Cart Section */}
        <section id="cart" className="section-padding bg-background">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
              
              {/* Left Image (No Crop, Full Visible) */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-white p-4 w-full">
                  <img
                    src={cartImage}
                    alt="Fresh Dairy Products"
                    className="w-full h-[260px] sm:h-[300px] md:h-[380px] object-contain"
                  />
                </div>
              </div>

              {/* Right Text Content */}
              <div className="flex-1 text-center md:text-left max-w-2xl">
                <span className="badge-fresh mb-4 inline-block">Your Order</span>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
                  Ready to Order?
                </h2>

                <p className="text-muted-foreground mb-8">
                  Add products to your cart and place your order directly through WhatsApp. 
                  We'll deliver fresh dairy products right to your doorstep!
                </p>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="btn-hero btn-primary-gradient rounded-full inline-flex items-center gap-3 px-10 py-5 text-lg shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span className="text-xl">🛒</span>
                  View Cart & Checkout
                </button>
              </div>

            </div>
          </div>
        </section>

        <WhyChooseUs />
        <AboutFounder />
        <BulkOrders />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* ✅ Cart Modal (works from Navbar + Button) */}
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export default Index;
