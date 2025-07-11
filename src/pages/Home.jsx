import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';
import { Heart, Stethoscope, Leaf } from 'lucide-react';

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Home = () => {
    return (
        <PageWrapper title="Home" description="Personalized, compassionate veterinary care for every life stage. Extended visits and Fear Free Certified veterinarians.">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-brand-beige-light overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover opacity-30"
                        alt="A happy dog playing in a sunny field"
                     src="https://images.unsplash.com/photo-1589756695365-4e0915b3a246" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-brand-green-dark mb-4"
                    >
                        Personalized, Compassionate Veterinary Care for Every Life Stage
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-brand-green-dark/80 max-w-3xl mx-auto mb-8"
                    >
                        Extended visits. Fear Free Certified veterinarians. A calm and collaborative experience for pets and their people.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center space-x-4"
                    >
                        <Button asChild size="lg">
                            <Link to="/contact">Request an Appointment</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link to="/about/meet-the-team">Meet Our Team</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Key Values Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark">Our Commitment to You & Your Pet</h2>
                        <p className="mt-4 text-lg text-brand-green-dark/80">What makes our boutique clinic experience different.</p>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        staggerChildren={0.2}
                    >
                        <motion.div variants={cardVariants} className="bg-brand-beige-light p-8 rounded-lg shadow-lg text-center">
                            <Heart className="mx-auto h-12 w-12 text-brand-brown mb-4" />
                            <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Boutique Clinic Experience</h3>
                            <p className="text-brand-green-dark/80">Extended, unrushed appointments with a focus on both the pet and client experience.</p>
                        </motion.div>
                        <motion.div variants={cardVariants} className="bg-brand-beige-light p-8 rounded-lg shadow-lg text-center">
                            <Stethoscope className="mx-auto h-12 w-12 text-brand-brown mb-4" />
                            <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Fear Free & Cat Friendly</h3>
                            <p className="text-brand-green-dark/80">Certified practices to ensure a calm, positive visit for every animal.</p>
                        </motion.div>
                        <motion.div variants={cardVariants} className="bg-brand-beige-light p-8 rounded-lg shadow-lg text-center">
                            <Leaf className="mx-auto h-12 w-12 text-brand-brown mb-4" />
                            <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Individualized Care Plans</h3>
                            <p className="text-brand-green-dark/80">A fully present, collaborative team dedicated to creating the best plan for your pet.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default Home;