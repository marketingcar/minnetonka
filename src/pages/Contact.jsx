import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Message Sent! (Simulation)",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀 We've received your message and will get back to you shortly.",
    });
  };

  return (
    <PageWrapper title="Contact & Appointments" description="Contact us to book an appointment. Find our address, phone number, and a convenient contact form.">
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
              <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4"
              >
                  Contact & Book an Appointment
              </motion.h1>
              <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-2xl mx-auto text-lg text-brand-green-dark/80"
              >
                  We'd love to hear from you. Reach out to schedule a visit or ask any questions you may have.
              </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-brand-beige-light p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6">Clinic Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-brown mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green-dark">Address</p>
                    <p className="text-brand-green-dark/90">17408 Minnetonka Blvd, Minnetonka, MN 55345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-brown mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green-dark">Phone</p>
                    <p className="text-brand-green-dark/90">952.473.1239</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-brown mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green-dark">Email</p>
                    <p className="text-brand-green-dark/90">info@minnetonkaanimal.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-green-dark/20">
                <h3 className="font-semibold text-brand-green-dark">Hours</h3>
                <p className="text-brand-green-dark/90">Monday – Friday: 8 a.m. – 5 p.m.</p>
                <p className="text-brand-green-dark/90">Saturday: Closed</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-brand-beige-light p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6">Request an Appointment</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" {...register("name", { required: "Name is required" })} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="petName">Pet's Name</Label>
                  <Input id="petName" {...register("petName", { required: "Pet's name is required" })} />
                  {errors.petName && <p className="text-red-500 text-sm mt-1">{errors.petName.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }})} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Reason for Visit</Label>
                  <Textarea id="message" {...register("message", { required: "Please provide a reason for your visit" })} />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full">Send Request</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;