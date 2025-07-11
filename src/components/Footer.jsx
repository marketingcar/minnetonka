
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} Coming Soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">Minnetonka Animal Hospital</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing personalized, compassionate veterinary care with extended appointments and Fear Free practices for pets and their families.
            </p>
            <div className="flex items-center space-x-2 text-emerald-600">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Fear Free Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-900">Quick Links</span>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/team" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Meet the Team
              </Link>
              <Link to="/new-clients" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                New Clients
              </Link>
              <Link to="/integrative-medicine" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Integrative Medicine
              </Link>
              <Link to="/pet-resources" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Pet Resources
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-900">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p>123 Veterinary Way</p>
                  <p>Minnetonka, MN 55345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">(952) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">info@minnetonkavet.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-900">Hours</span>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Monday - Friday</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 ml-7">
                <p className="font-medium">Saturday</p>
                <p>9:00 AM - 4:00 PM</p>
              </div>
              <div className="text-sm text-gray-600 ml-7">
                <p className="font-medium">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <img  
                alt="Fear Free Certified Practice badge" 
                className="h-12 w-auto"
               src="https://images.unsplash.com/photo-1695392158511-e293ed316d2c" />
              <img  
                alt="Cat Friendly Practice badge" 
                className="h-12 w-auto"
               src="https://images.unsplash.com/photo-1671796971414-9e1e4e80cb6f" />
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2024 Minnetonka Animal Hospital. All rights reserved. | 
              <button 
                onClick={() => handleSocialClick('Privacy Policy')}
                className="ml-1 hover:text-emerald-600 transition-colors"
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
