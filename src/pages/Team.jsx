import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Julie',
    title: 'DVM, Co-Founder',
    image: 'jung.jpg',
    alt: 'Dr. Julie, a friendly female veterinarian with a stethoscope, smiling warmly',
    bio: "Dr. Julie founded Minnetonka Animal Hospital with a vision for a more personal, compassionate approach to veterinary care. With extensive experience in caring for dogs, cats, and a special love for small mammals like rabbits, guinea pigs, and hamsters, she champions the Fear Free approach in every interaction. Her dedication lies in building lasting relationships with clients and ensuring every pet feels safe and heard."
  },
  {
    name: 'Dr. Jung',
    title: 'DVM, CVA',
    image: 'julie.jpg',
    alt: 'Dr. Jung, a kind male veterinarian of Asian descent, gently holding a cat',
    bio: "Dr. Jung brings a unique, holistic perspective to our team. As a Certified Veterinary Acupuncturist (CVA), he masterfully blends conventional medicine with Traditional Chinese Veterinary Medicine. His expertise in acupuncture, herbal therapy, and food therapy provides powerful, alternative healing pathways for pets, especially those with chronic conditions. He is passionate about treating the whole pet, not just the illness."
  }
];

const Team = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <PageWrapper title="Meet the Team" description="Get to know Dr. Julie and Dr. Jung, the compassionate and skilled veterinarians at Minnetonka Animal Hospital.">
      <div className="bg-brand-beige-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
             <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-block p-4 bg-brand-green-light rounded-full mb-4"
            >
                <Users className="h-12 w-12 text-white" />
            </motion.div>
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4"
            >
              Our Compassionate Team
            </motion.h1>
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl mx-auto text-lg text-brand-green-dark/80"
            >
              Meet the dedicated, fully present veterinarians who make our boutique clinic a home for healing.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            staggerChildren={0.2}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="bg-white rounded-lg shadow-xl overflow-hidden text-center"
              >
                <img  class="w-full h-80 object-cover" alt={member.alt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-brand-green-dark">{member.name}</h3>
                  <p className="text-brand-brown font-semibold mb-4">{member.title}</p>
                  <p className="text-brand-green-dark/90">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Team;