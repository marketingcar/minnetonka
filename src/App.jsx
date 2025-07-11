import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Team from '@/pages/Team';
import NewClients from '@/pages/NewClients';
import IntegrativeMedicine from '@/pages/IntegrativeMedicine';
import PetResources from '@/pages/PetResources';
import Contact from '@/pages/Contact';

function App() {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen bg-brand-beige-light">
            <Header />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/integrative-medicine" element={<IntegrativeMedicine />} />
                        <Route path="/about/meet-the-team" element={<Team />} />
                        <Route path="/new-clients" element={<NewClients />} />
                        <Route path="/about/pet-resources" element={<PetResources />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

export default App;