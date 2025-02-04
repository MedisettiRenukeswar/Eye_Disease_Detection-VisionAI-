import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "40vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="animate-fade-in">
                <h1 className="text-white font-semibold text-5xl mb-6">
                  Contact Us
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Get in touch with our team for any questions or support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Contact Info */}
            <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-600">contact@visionai.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Address</h3>
                      <p className="text-gray-600">
                        123 Innovation Drive<br />
                        Silicon Valley, CA 94025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-8/12 px-4">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold
                    ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
                    transition duration-300`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}