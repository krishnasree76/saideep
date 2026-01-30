import founderImage from '@/assets/farm-founder.jpg'; // use your real image name

const AboutFounder = () => {
  return (
    <section id="about" className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          {/* Image/Visual Side */}
<div className="relative animate-fade-up">
  <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
    <img
      src={founderImage}
      alt="Saideep Ecobites Farm"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Decorative Elements */}
  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-secondary/20 animate-float" />
  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-leaf/20 animate-float" style={{ animationDelay: '2s' }} />
</div>


          {/* Content Side */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="badge-fresh mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              From Our Farm to Your Family
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded by <strong className="text-foreground">Tullubellu Kanaka Lakshmi</strong>, 
                Saideep Ecobites was started with a mission to provide pure, original dairy products 
                directly from farmers to households without middlemen.
              </p>
              <p>
                We believe in the traditional way of dairy farming, where the health of our livestock 
                and the purity of our products come first. Every drop of milk, every spoon of ghee, 
                and every piece of paneer is a testament to our commitment to quality and authenticity.
              </p>
              <p>
                Our journey began with a simple belief: families deserve access to pure, 
                unadulterated dairy products just like our grandparents enjoyed. Today, we're proud 
                to serve hundreds of families with the freshest dairy products in the region.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Pure & Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">Daily</div>
                <div className="text-sm text-muted-foreground">Fresh Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
