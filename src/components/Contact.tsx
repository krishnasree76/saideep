import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Saideep+Ecobites+Jangareddygudem+Mahindra+Showroom";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="section-padding bg-[#fcfdfa] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-6 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready for farm-fresh dairy? Reach out for orders, bulk enquiries, or just to say hello.
          </p>
        </div>

        {/* Contact Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Phone */}
          <motion.a
            variants={cardVariants}
            href="tel:9701363812"
            className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Call Us</p>
                <p className="text-lg font-bold text-slate-900 leading-none">9701363812</p>
              </div>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            variants={cardVariants}
            href="https://wa.me/919705287966"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 text-green-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="text-lg font-bold text-slate-900 leading-none">9705287966</p>
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            variants={cardVariants}
            href="mailto:saideepecobites@gmail.com"
            className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm font-bold text-slate-900 truncate">saideepecobites@gmail.com</p>
              </div>
            </div>
          </motion.a>

          {/* Instagram */}
          <motion.a
            variants={cardVariants}
            href="https://www.instagram.com/saideepecobites"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] group-hover:text-white transition-all duration-300 text-[#dc2743]">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#dc2743] uppercase tracking-wider mb-1">Instagram</p>
                <p className="text-lg font-bold text-slate-900 leading-none">@saideepecobites</p>
              </div>
            </div>
          </motion.a>

          {/* Business Hours */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Opening Hours</p>
                <p className="font-bold text-slate-900 leading-tight">Mon – Sun</p>
                <p className="text-primary font-bold text-sm">6:00 AM – 9:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Location / Address Card */}
          <motion.a
            variants={cardVariants}
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 text-orange-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                  Visit Us <ExternalLink className="w-3 h-3" />
                </p>
                <p className="font-bold text-slate-900 text-sm leading-relaxed">
                  Jangareddygudem, Eluru District<br />
                  Opposite Mahindra Showroom
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Full Address Card - Interactive Link */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block group relative overflow-hidden bg-slate-900 rounded-2xl p-8 text-white shadow-2xl hover:scale-[1.01] transition-transform duration-300"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/30 transition-colors" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.2em] mb-2">Location </p>
              <h3 className="text-xl md:text-2xl font-display font-medium leading-relaxed">
                Sri Ramadevi Enclave, Eluru Road, Ramachandrapuram, Jangareddygudem – 534447
              </h3>
            </div>
            <div className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 group-hover:bg-white group-hover:text-primary transition-colors">
              Open in Maps
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;