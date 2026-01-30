import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card-elevated">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Saideep Ecobites" className="h-14 w-14 rounded-full object-cover" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-primary">Saideep</h1>
              <p className="text-sm font-medium text-secondary -mt-1">Ecobites</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:9701363812"
              className="hidden sm:flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">9701363812</span>
            </a>
            
            <a
              href="#cart"
              className="relative p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-4 border-t border-border/50 animate-fade-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-foreground/80 hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9701363812"
              className="flex items-center gap-2 py-3 text-primary font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>9701363812</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
