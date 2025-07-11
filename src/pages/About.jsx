import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { PawPrint, Heart, Users } from 'lucide-react';

const About = () => {
    return (
        <PageWrapper title="About Us" description="Learn about our philosophy of care at Minnetonka Animal Hospital, combining conventional medicine with a whole-pet approach for thoughtful, informed care.">
            <div className="bg-brand-beige-light">
                {/* Hero Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                     <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="inline-block p-4 bg-brand-green-light rounded-full mb-4"
                    >
                        <PawPrint className="h-12 w-12 text-white" />
                    </motion.div>
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4"
                    >
                        About Minnetonka Animal Hospital
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-3xl mx-auto text-lg text-brand-green-dark/80"
                    >
                        At Minnetonka Animal Hospital, we believe in a whole-pet approach. We blend the best of conventional medicine with proven integrative therapies to provide thoughtful, informed care that is never rushed and always personal.
                    </motion.p>
                </div>

                {/* Content Section */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl font-bold text-brand-green-dark mb-4">More Than Just a Clinic</h2>
                                <p className="text-brand-green-dark/90 mb-4">
                                    We are a boutique practice founded on the principle of providing a calm, collaborative, and personalized experience for both pets and their people. Our extended appointment times allow us to dive deep into your pet's health, listen to your concerns, and build a partnership based on trust.
                                </p>
                                <p className="text-brand-green-dark/90">
                                    Our Fear Free Certified and Cat Friendly Practice ensures every visit is as stress-free as possible. We create individualized care plans because we know every pet is unique, and we are committed to being fully present for every step of their health journey.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img  class="rounded-lg shadow-xl object-cover w-full h-80" alt="Cozy and modern veterinary clinic waiting room" src="https://images.unsplash.com/photo-1565695040813-8812dba10aca" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                 {/* Values Section */}
                 <div className="py-16 bg-brand-beige-light">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-brand-green-dark mb-12">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                 initial={{ y: 50, opacity: 0 }}
                                 whileInView={{ y: 0, opacity: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 0.5, delay: 0 }}
                                 className="flex flex-col items-center"
                            >
                                <div className="bg-brand-brown text-white rounded-full p-4 mb-4">
                                    <Heart className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Compassion</h3>
                                <p className="text-brand-green-dark/80">We treat every pet as our own and every client as family, providing care with empathy and respect.</p>
                            </motion.div>
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <div className="bg-brand-brown text-white rounded-full p-4 mb-4">
                                    <Users className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Collaboration</h3>
                                <p className="text-brand-green-dark/80">We work closely with you. Your insights are invaluable in creating the perfect health plan for your pet.</p>
                            </motion.div>
                             <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col items-center"
                            >
                                <div className="bg-brand-brown text-white rounded-full p-4 mb-4">
                                    <PawPrint className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Personalized Care</h3>
                                <p className="text-brand-green-dark/80">Unrushed, individual attention allows us to tailor every aspect of our care to your pet's specific needs.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default About;