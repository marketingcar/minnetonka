import React from 'react';
    import PageWrapper from '@/components/PageWrapper';
    import { motion } from 'framer-motion';
    import { Stethoscope, HeartPulse, Activity, Syringe, Leaf, Cross } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';

    const serviceList = [
      {
        icon: Stethoscope,
        title: 'Preventive & Wellness Care',
        description: 'Comprehensive annual exams, vaccinations, and parasite prevention tailored to your pet’s lifestyle. We focus on proactive health to ensure a long, happy life.'
      },
      {
        icon: HeartPulse,
        title: 'Dentistry & Surgery',
        description: 'Advanced dental cleanings, extractions, and a wide range of soft tissue surgeries performed with the utmost care and advanced monitoring.'
      },
      {
        icon: Activity,
        title: 'Diagnostics',
        description: 'In-house digital radiographs and ultrasound capabilities allow us to get fast, accurate answers when your pet needs them most.'
      },
      {
        icon: Syringe,
        title: 'Laser Therapy',
        description: 'A non-invasive treatment to reduce pain and inflammation, and to speed healing for a variety of conditions, from arthritis to post-surgical recovery.'
      },
      {
        icon: Leaf,
        title: 'Integrative Medicine',
        description: 'Blending conventional medicine with acupuncture, herbal remedies, and food therapy to provide a holistic and balanced approach to health.',
        link: '/services/integrative-medicine'
      },
      {
        icon: Cross,
        title: 'End-of-Life Care',
        description: 'Compassionate palliative and hospice support to ensure your pet’s final days are comfortable, peaceful, and filled with dignity.'
      }
    ];

    const Services = () => {
        const cardVariants = {
            offscreen: { y: 50, opacity: 0 },
            onscreen: {
                y: 0,
                opacity: 1,
                transition: { type: "spring", bounce: 0.4, duration: 0.8 }
            }
        };

        return (
            <PageWrapper title="Our Services" description="Explore the comprehensive and compassionate veterinary services we offer, from preventive care to integrative medicine.">
                <div className="bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="text-center mb-12">
                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4"
                            >
                                Comprehensive Veterinary Services
                            </motion.h1>
                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="max-w-2xl mx-auto text-lg text-brand-green-dark/80"
                            >
                                We provide thoughtful, unrushed care across a wide range of services, always ensuring you're part of the conversation.
                            </motion.p>
                        </div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.2 }}
                            staggerChildren={0.1}
                        >
                            {serviceList.map((service, index) => (
                                <motion.div 
                                    key={index}
                                    variants={cardVariants}
                                    className="bg-brand-beige-light rounded-lg shadow-lg p-8 flex flex-col text-center"
                                >
                                    <div className="mx-auto bg-brand-green text-white rounded-full p-4 mb-4">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">{service.title}</h3>
                                    <p className="text-brand-green-dark/80 flex-grow">{service.description}</p>
                                    {service.link && (
                                        <Button asChild className="mt-6">
                                            <Link to={service.link}>Learn More</Link>
                                        </Button>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </PageWrapper>
        );
    };

    export default Services;