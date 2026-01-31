import { Instagram, Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const googleMapsUrl = "https://maps.app.goo.gl/kupEeM6hPjyrJ9pC9?g_st=aw";

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle organic pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="container-custom relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-1 bg-white rounded-full shadow-lg">
                <img src={logo} alt="Saideep Ecobites" className="w-14 h-14 rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold tracking-tight">Saideep</h3>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/60 font-semibold">Ecobites</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed font-light">
              Bridging the gap between rural farms and your dining table with 100% pure, 
              additive-free dairy products.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/saideepecobites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919705287966"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 border border-white/10"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links with Hover Effects */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-white/30 rounded-full" />
            </h4>
            <ul className="space-y-4 font-light">
              {['Home', 'Products', 'Why Us', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="group flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with Action Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-white/30 rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:9701363812" className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">9701363812</span>
                </a>
              </li>
              <li>
                <a href="mailto:saideepecobites@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium break-all">saideepecobites@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Location */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Farm Store
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-white/30 rounded-full" />
            </h4>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block space-y-4"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white/60 mt-1 shrink-0 group-hover:text-white transition-colors" />
                <p className="text-sm leading-relaxed text-primary-foreground/80 font-light group-hover:text-white transition-colors">
                  Jangareddygudem, Eluru District<br />
                  Opposite Mahindra Showroom<br />
                  Sri Ramadevi Enclave – 534447
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider py-2 px-4 bg-white/10 rounded-lg group-hover:bg-white group-hover:text-primary transition-all">
                View on Maps <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs font-light">
            © {currentYear} Saideep Ecobites. Built with pride for a healthier India.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-primary-foreground/40 font-bold">
            {/* <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;