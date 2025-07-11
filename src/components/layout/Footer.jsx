import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
    const { toast } = useToast();

    const handleNotImplemented = () => {
      toast({
        title: "Coming Soon!",
        description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
    };

    return (
        <footer className="bg-brand-green-dark text-brand-beige-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 flex flex-col items-start">
                         <Link to="/" className="flex items-center space-x-2 mb-4">
                            <PawPrint className="h-8 w-8 text-brand-beige-light" />
                            <span className="font-bold text-xl">Minnetonka Animal Hospital</span>
                        </Link>
                        <p className="text-sm text-brand-beige-DEFAULT">Personalized, compassionate veterinary care.</p>
                    </div>

                    <div>
                        <p className="font-semibold text-white mb-4">Quick Links</p>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/about/meet-the-team" className="hover:text-white transition-colors">Our Team</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold text-white mb-4">Contact Us</p>
                        <ul className="space-y-2 text-sm">
                            <li>17408 Minnetonka Blvd, Minnetonka, MN 55345</li>
                            <li>952.473.1239</li>
                            <li>info@minnetonkaanimal.com</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold text-white mb-4">Follow Us</p>
                        <div className="flex space-x-4">
                            <button onClick={handleNotImplemented} className="hover:text-white transition-colors"><Facebook size={24} /></button>
                            <button onClick={handleNotImplemented} className="hover:text-white transition-colors"><Instagram size={24} /></button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-brand-green pt-8 text-center text-sm text-brand-beige-DEFAULT">
                    <p>&copy; {new Date().getFullYear()} Minnetonka Animal Hospital. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;