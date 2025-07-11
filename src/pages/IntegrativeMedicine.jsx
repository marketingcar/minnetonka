import React from 'react';
    import PageWrapper from '@/components/PageWrapper';
    import { motion } from 'framer-motion';
    import { Leaf, PlusCircle, ShieldCheck } from 'lucide-react';

    const IntegrativeMedicine = () => {
      return (
        <PageWrapper title="Integrative Medicine" description="Discover our holistic approach to pet health, combining Traditional Chinese Veterinary Medicine with conventional care through Dr. Jung's expertise.">
          <div className="bg-brand-beige-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="inline-block p-4 bg-brand-green-light rounded-full mb-4"
                >
                  <Leaf className="h-12 w-12 text-white" />
                </motion.div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4"
                >
                  Integrative & Holistic Care
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-3xl mx-auto text-lg text-brand-green-dark/80"
                >
                  Led by Dr. Jung, our integrative medicine services blend the best of Eastern and Western practices to promote balance, healing, and overall well-being for your pet.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                  >
                      <h2 className="text-3xl font-bold text-brand-green-dark mb-4">A Whole-Pet Approach</h2>
                      <p className="text-brand-green-dark/90 mb-4">
                        Integrative medicine isn't about choosing one approach over another; it's about creating a more comprehensive toolkit for your pet's health. We use Traditional Chinese Veterinary Medicine (TCVM) alongside modern diagnostics and treatments to address the root cause of illness, not just the symptoms.
                      </p>
                      <p className="text-brand-green-dark/90">
                        This approach is particularly effective for chronic conditions, pain management, and enhancing quality of life.
                      </p>
                  </motion.div>
                  <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                  >
                      <img  class="rounded-lg shadow-xl object-cover w-full h-80" alt="A calm dog receiving acupuncture treatment" src="https://images.unsplash.com/photo-1686817590605-2b34e5345e31" />
                  </motion.div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-brand-green-dark text-center mb-10">Our Integrative Offerings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <PlusCircle className="mx-auto h-10 w-10 text-brand-brown mb-3" />
                    <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Acupuncture</h3>
                    <p className="text-brand-green-dark/80">A gentle technique using fine needles to stimulate the body's natural painkillers and anti-inflammatory processes. Ideal for arthritis, pain, and neurological issues.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Leaf className="mx-auto h-10 w-10 text-brand-brown mb-3" />
                    <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Herbal Therapy</h3>
                    <p className="text-brand-green-dark/80">Custom-formulated Chinese herbal blends that work synergistically with the body to treat a wide range of internal medicine conditions and restore balance.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <ShieldCheck className="mx-auto h-10 w-10 text-brand-brown mb-3" />
                    <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Food Therapy</h3>
                    <p className="text-brand-green-dark/80">Using the energetic properties of whole foods to create a diet that supports your pet’s specific constitution, helping to manage allergies, digestive issues, and more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      );
    };

    export default IntegrativeMedicine;