import React from 'react';
    import PageWrapper from '@/components/PageWrapper';
    import { motion } from 'framer-motion';
    import { FileText, Heart, MapPin } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';

    const NewClients = () => {
        return (
            <PageWrapper title="New Clients" description="Welcome to Minnetonka Animal Hospital! Find all the information you need for your first visit, including forms and what to expect.">
                <div className="bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="text-center mb-12">
                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4"
                            >
                                Welcome to Our Family
                            </motion.h1>
                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="max-w-2xl mx-auto text-lg text-brand-green-dark/80"
                            >
                                We are thrilled to welcome you and your pet to Minnetonka Animal Hospital. Here’s what to expect from your first visit with us.
                            </motion.p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <motion.div 
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className="bg-brand-beige-light p-8 rounded-lg shadow-md"
                                >
                                    <div className="flex items-center text-brand-green-dark mb-4">
                                        <Heart className="h-8 w-8 mr-3 text-brand-brown"/>
                                        <h2 className="text-2xl font-bold">What to Expect</h2>
                                    </div>
                                    <p className="text-brand-green-dark/90">
                                        Your first appointment will be an extended, 60-minute visit. This allows us to conduct a thorough examination, get to know you and your pet, and discuss your concerns without feeling rushed. We will review your pet's medical history and collaborate with you to create a personalized health plan.
                                    </p>
                                </motion.div>
                                <motion.div 
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className="bg-brand-beige-light p-8 rounded-lg shadow-md"
                                >
                                    <div className="flex items-center text-brand-green-dark mb-4">
                                        <FileText className="h-8 w-8 mr-3 text-brand-brown"/>
                                        <h2 className="text-2xl font-bold">New Client Form</h2>
                                    </div>
                                    <p className="text-brand-green-dark/90 mb-4">
                                        To save time, please fill out our new client form before your visit. Also, please arrange for any previous medical records to be sent to us ahead of your appointment.
                                    </p>
                                    <Button disabled>Download Form (Coming Soon)</Button>
                                </motion.div>
                            </div>

                            <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-center bg-brand-green-light text-white p-10 rounded-lg shadow-lg"
                            >
                                <MapPin className="mx-auto h-10 w-10 mb-3" />
                                <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
                                <p className="max-w-xl mx-auto mb-6">
                                    We can't wait to meet you. Contact us today to schedule your first appointment and experience the difference of personalized, compassionate care.
                                </p>
                                <Button asChild size="lg" variant="secondary" className="bg-white text-brand-green hover:bg-white/90">
                                    <Link to="/contact">Request an Appointment</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    };

    export default NewClients;