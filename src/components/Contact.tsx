'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // Optional company field
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted with data:', data);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Netlify Forms submission using URLSearchParams
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('company', data.company || 'Not specified');
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      console.log('Netlify Forms response status:', response.status);

      if (response.ok || response.status === 200) {
        setSubmitStatus('success');
        reset();
        console.log('Form submitted successfully via Netlify Forms');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ramgopalpampana10@gmail.com',
      href: 'mailto:ramgopalpampana10@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7730072669',
      href: 'tel:+917730072669',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ramgopalpampana/',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Ram2669',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--mission-surface)]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[var(--mission-muted)] max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[var(--mission-text)] mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-[var(--mission-muted)] mb-8 leading-relaxed">
              Whether you&apos;re looking for a dedicated software test engineer, want to collaborate on an exciting project,
              or just want to say hello, I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-[rgba(0,227,255,.12)] border border-[var(--mission-border)]">
                      <IconComponent className="w-6 h-6 text-[var(--mission-accent)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--mission-muted)]">{item.label}</p>
                      {item.href !== '#' ? (
                        <a
                          href={item.href}
                          className="text-[var(--mission-text)] hover:text-[var(--mission-accent)] transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--mission-text)]">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--mission-text)] mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-[var(--mission-muted)] bg-[rgba(200,209,229,.06)] border border-[var(--mission-border)] hover:text-[var(--mission-text)] hover:bg-[rgba(0,227,255,.12)] transition-all duration-200`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl p-8 shadow-xl border bg-[var(--mission-panel)] border-[var(--mission-border)]">
              <motion.h3
                className="text-2xl font-bold text-[var(--mission-text)] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Send a Message
              </motion.h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--mission-muted)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"

                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg border bg-[var(--mission-surface)] border-[var(--mission-border)] text-[var(--mission-text)] placeholder-[var(--mission-muted)] focus:ring-2 focus:ring-[var(--mission-accent)] focus:border-transparent transition-all duration-200 hover:border-[var(--mission-accent)]"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--mission-muted)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"

                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg border bg-[var(--mission-surface)] border-[var(--mission-border)] text-[var(--mission-text)] placeholder-[var(--mission-muted)] focus:ring-2 focus:ring-[var(--mission-accent)] focus:border-transparent transition-all duration-200 hover:border-[var(--mission-accent)]"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--mission-muted)] mb-2">
                    Company <span className="text-[var(--mission-muted)]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"

                    {...register('company')}
                    className="w-full px-4 py-3 rounded-lg border bg-[var(--mission-surface)] border-[var(--mission-border)] text-[var(--mission-text)] placeholder-[var(--mission-muted)] focus:ring-2 focus:ring-[var(--mission-accent)] focus:border-transparent transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--mission-muted)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"

                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 rounded-lg border bg-[var(--mission-surface)] border-[var(--mission-border)] text-[var(--mission-text)] placeholder-[var(--mission-muted)] focus:ring-2 focus:ring-[var(--mission-accent)] focus:border-transparent transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--mission-muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"

                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 rounded-lg border bg-[var(--mission-surface)] border-[var(--mission-border)] text-[var(--mission-text)] placeholder-[var(--mission-muted)] focus:ring-2 focus:ring-[var(--mission-accent)] focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--mission-accent)] hover:brightness-110 disabled:opacity-60 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg text-center border border-[var(--mission-border)] bg-[rgba(46,230,166,.12)] text-[var(--mission-text)]"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg text-center border border-[var(--mission-border)] bg-[rgba(255,99,132,.12)] text-[var(--mission-text)]"
                  >
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
