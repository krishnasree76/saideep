import { ShoppingCart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Farm Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 py-20 md:py-28">
        <div className="max-w-3xl animate-fade-up">

          {/* Premium Tag */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            <span className="text-primary-foreground/90 font-medium text-sm tracking-wide">
              Fresh Farm Delivery • Every Morning
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.15] mb-8">
            Pure Farm Milk & Dairy{' '}
            <span className="text-leaf-light">Crafted Naturally</span>{' '}
            <span className="block mt-2 text-3xl md:text-4xl font-medium text-primary-foreground/90">
              Delivered Directly to Your Home
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-4 leading-relaxed max-w-2xl">
            Original A1 Buffalo & Cow Milk, traditional pot curd, pure ghee, and fresh paneer — prepared with care and delivered daily.
          </p>

          <p className="text-xl font-semibold text-leaf-light mb-10 tracking-wide">
            100% Pure • No Water • No Adulteration • No Antibiotics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            <a href="#products">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order Fresh Now
              </Button>
            </a>

            <a href="tel:9701363812">
              <Button
  size="lg"
  variant="outline"
  className="px-8 py-6 text-lg font-semibold border-white/60 text-white bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl shadow-lg"
>
  <Phone className="w-5 h-5 mr-2" />
  Call Us
</Button>

            </a>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent z-0" />
    </section>
  );
};

export default Hero;
