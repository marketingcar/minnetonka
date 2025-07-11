import React, { useState } from 'react';
    import PageWrapper from '@/components/PageWrapper';
    import { motion, AnimatePresence } from 'framer-motion';
    import { BookOpen, ChevronDown } from 'lucide-react';

    const faqs = [
      {
        question: "What does 'Fear Free Certified' mean?",
        answer: "Being Fear Free Certified means our team has undergone extensive training to recognize and alleviate fear, anxiety, and stress in our patients. We use gentle handling techniques, calming environments, and positive reinforcement to make vet visits a better experience for everyone."
      },
      {
        question: "Why are your appointment times longer?",
        answer: "We schedule longer appointments (typically 30-60 minutes) to ensure we have ample time to perform a thorough exam, listen to your concerns, and develop a comprehensive plan without anyone feeling rushed. This is central to our personalized approach to care."
      },
      {
        question: "What pets do you treat?",
        answer: "We provide care for dogs and cats. Dr. Julie also has a special interest and expertise in treating small mammals, including rabbits, guinea pigs, rats, mice, hamsters, and gerbils."
      },
      {
        question: "What is integrative medicine?",
        answer: "Integrative medicine combines conventional Western veterinary medicine with complementary therapies like acupuncture, herbal medicine, and food therapy. This holistic approach allows us to use the most effective tools from both worlds to treat your pet."
      }
    ];

    const AccordionItem = ({ q, a }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <motion.div layout className="border-b border-brand-green-dark/20">
                <motion.button 
                    layout 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-brand-green-dark"
                >
                    {q}
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="h-6 w-6" />
                    </motion.div>
                </motion.button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="pb-5 pr-8 text-brand-green-dark/80">{a}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    const PetResources = () => {
        return (
            <PageWrapper title="Pet Resources" description="Find answers to frequently asked questions and access educational content to help you care for your pet.">
                <div className="bg-brand-beige-light">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="inline-block p-4 bg-brand-green-light rounded-full mb-4"
                            >
                                <BookOpen className="h-12 w-12 text-white" />
                            </motion.div>
                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4"
                            >
                                Pet Resources & FAQs
                            </motion.h1>
                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="max-w-2xl mx-auto text-lg text-brand-green-dark/80"
                            >
                                Your questions, answered. Here is some helpful information about our practice and approach to pet care.
                            </motion.p>
                        </div>
                        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} q={faq.question} a={faq.answer} />
                            ))}
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    };

    export default PetResources;