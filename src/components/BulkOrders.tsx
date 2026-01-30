import { Button } from '@/components/ui/button';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

const BulkOrders = () => {
  const handleEnquiry = () => {
    const message = encodeURIComponent(
      `Hello Saideep Ecobites,\n\nI would like to enquire about bulk orders for my event.\n\nPlease share more details about:\n- Pot Curd bulk pricing\n- Paneer bulk pricing\n- Delivery options\n\nThank you!`
    );
    window.open(`https://wa.me/919705287966?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden section-padding bg-[#fdfcfb]">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              {/* <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                Premium Event Catering
              </span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Make Your Celebrations <br />
                <span className="text-primary">Extraordinary</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Elevate your menu with the authentic taste of farm-fresh dairy. 
                Our Pot Curd and Fresh Paneer are the preferred choice for 
                premium events and traditional gatherings.
              </p>
            </div>

            {/* Event Type Cards - Theme Green */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Functions', 'Weddings', 'Events', 'Parties'].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-sm hover:bg-primary/20 transition-all duration-300 group"
                >
                  <span className="text-primary font-bold text-sm group-hover:scale-105 transition-transform">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                'Special bulk pricing for large quantities',
                'Hygienic packaging & timely delivery',
                'Farm-to-table freshness guaranteed'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={handleEnquiry}
              size="lg"
              className="h-14 px-8 text-lg rounded-full shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 bg-primary text-white hover:bg-primary/90"
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Enquire for Bulk Orders
            </Button>
          </div>

          {/* Right Image Column */}
          <div className="relative group animate-fade-in">
            {/* Soft Glow effect behind image */}
            <div className="absolute -inset-4 bg-primary/15 rounded-3xl blur-2xl group-hover:bg-primary/25 transition-all duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/src/assets/potcurd-paneer.jpg"
                alt="Premium Pot Curd and Paneer"
                className="w-full h-[550px] object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                {/* <p className="text-xs font-light uppercase tracking-[0.2em] mb-2 opacity-90">Ecobites Selection</p> */}
                <h3 className="text-3xl font-display font-semibold">Fresh Pot Curd & Paneer</h3>
                <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BulkOrders;