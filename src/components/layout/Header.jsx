import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PawPrint, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const navLinks = [
    { name: 'Home', path: '/' },
    {
        name: 'About Us',
        path: '/about',
        subLinks: [
            { name: 'About Minnetonka Animal Hospital', path: '/about' },
            { name: 'Meet the Team', path: '/about/meet-the-team' },
            { name: 'Pet Resources', path: '/about/pet-resources' },
        ]
    },
    {
        name: 'Services',
        path: '/services',
        subLinks: [
            { name: 'All Services', path: '/services' },
            { name: 'Integrative Medicine', path: '/services/integrative-medicine' },
        ]
    },
    { name: 'New Clients', path: '/new-clients' },
];

const NavItem = ({ link, closeMobileMenu }) => {
    if (link.subLinks) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-sm font-medium transition-colors text-brand-green-dark hover:text-brand-green focus:outline-none">
                        {link.name}
                        <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {link.subLinks.map(subLink => (
                        <DropdownMenuItem key={subLink.name} asChild>
                            <Link to={subLink.path}>{subLink.name}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
         <NavLink
            to={link.path}
            className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-green ${isActive ? 'text-brand-green font-semibold' : 'text-brand-green-dark'}`
            }
        >
            {link.name}
        </NavLink>
    );
}
    
const MobileNavItem = ({ link, closeMobileMenu }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleLinkClick = (e) => {
        if (link.subLinks) {
            e.preventDefault();
            setIsSubMenuOpen(!isSubMenuOpen);
        } else {
            closeMobileMenu();
        }
    };

    return (
        <div className="w-full text-center">
             <NavLink
                to={link.path}
                onClick={handleLinkClick}
                className="flex justify-center items-center text-lg font-medium transition-colors hover:text-brand-green text-brand-green-dark w-full"
            >
                {link.name}
                {link.subLinks && <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} />}
            </NavLink>
            <AnimatePresence>
            {isSubMenuOpen && link.subLinks && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col items-center space-y-2 mt-2"
                >
                    {link.subLinks.map(subLink => (
                        <Link
                            key={subLink.name}
                            to={subLink.path}
                            onClick={closeMobileMenu}
                            className="text-md text-brand-green-dark/80 hover:text-brand-green"
                        >
                            {subLink.name}
                        </Link>
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileMenuVariants = {
        closed: { opacity: 0, y: "-100%" },
        open: { opacity: 1, y: "0%" },
    };

    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-2 text-brand-green-dark hover:text-brand-green-dark/80 transition-colors">
                        <PawPrint className="h-8 w-8 text-brand-green" />
                        <span className="font-bold text-xl">Minnetonka Animal Hospital</span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <NavItem key={link.name} link={link} />
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center">
                        <Button asChild>
                            <Link to="/contact">Contact & Book</Link>
                        </Button>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-green-dark">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg"
                    >
                        <nav className="flex flex-col items-center space-y-4 p-6">
                            {navLinks.map((link) => (
                                <MobileNavItem key={link.name} link={link} closeMobileMenu={() => setIsOpen(false)} />
                            ))}
                            <Button asChild size="lg" className="w-full mt-4">
                                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact & Book Appointment</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;