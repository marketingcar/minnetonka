
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Meet the Team', href: '/team' },
    { name: 'New Clients', href: '/new-clients' },
    { name: 'Integrative Medicine', href: '/integrative-medicine' },
    { name: 'Pet Resources', href: '/pet-resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleBookAppointment = () => {
    toast({
      title: "🚧 Booking Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Minnetonka Animal Hospital</h1>
              <p className="text-sm text-emerald-600">Compassionate Care for Every Life Stage</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === item.href
                    ? 'text-emerald-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
              onClick={() => toast({
                title: "📞 Call Us",
                description: "Please call (952) 555-0123 to speak with our team!",
              })}
            >
              <Phone className="w-4 h-4" />
              <span>(952) 555-0123</span>
            </Button>
            <Button
              size="sm"
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700"
              onClick={handleBookAppointment}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors hover:text-emerald-600 ${
                    location.pathname === item.href
                      ? 'text-emerald-600'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => {
                    toast({
                      title: "📞 Call Us",
                      description: "Please call (952) 555-0123 to speak with our team!",
                    });
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4" />
                  <span>(952) 555-0123</span>
                </Button>
                <Button
                  className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => {
                    handleBookAppointment();
                    setIsMenuOpen(false);
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
