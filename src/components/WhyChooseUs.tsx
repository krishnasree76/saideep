import { Check, Droplet, Heart, Shield, Truck, Leaf } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Healthy Livestock',
    description: 'Milk collected directly from healthy, well-checked buffaloes & cows',
  },
  {
    icon: Truck,
    title: 'Direct Delivery',
    description: 'Direct delivery from farmers to customers, no middlemen',
  },
  {
    icon: Droplet,
    title: '100% Pure',
    description: 'Not a single drop of water added to any of our products',
  },
  {
    icon: Shield,
    title: 'Antibiotic Free',
    description: 'Free from antibiotics & any form of adulteration',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Packaging',
    description: 'Delivered in safe, reusable glass bottles & clay pots',
  },
  {
    icon: Check,
    title: 'Lab Tested',
    description: 'Fresh, natural, and nutritious for your entire family',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-fresh mb-4">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
            Why Choose Saideep Ecobites?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the purest, freshest dairy products 
            while supporting local farmers and sustainable practices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-500 animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
