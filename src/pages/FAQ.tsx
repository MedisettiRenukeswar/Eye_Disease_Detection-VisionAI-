import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How accurate is VisionAI's disease detection?",
      answer: "Our AI system has achieved a 95%+ accuracy rate in clinical trials, matching or exceeding human expert diagnosis in most cases. The system is continuously learning and improving through our vast database of validated cases."
    },
    {
      question: "How long does the analysis process take?",
      answer: "The initial AI analysis is completed within minutes of uploading your eye scan. For comprehensive reports that include expert review, results are typically available within 24 hours."
    },
    {
      question: "Is my medical data secure?",
      answer: "Yes, we take data security very seriously. All data is encrypted using military-grade encryption, and we comply with HIPAA and GDPR regulations. Your information is stored in secure, certified data centers with multiple layers of protection."
    },
    {
      question: "What types of eye conditions can VisionAI detect?",
      answer: "Our system can detect a wide range of conditions including diabetic retinopathy, glaucoma, age-related macular degeneration, cataracts, and various other retinal disorders. The AI is trained on millions of cases and continuously updated with new conditions."
    },
    {
      question: "Do I need special equipment to use VisionAI?",
      answer: "No special equipment is needed on your end. We work with eye care providers who have standard retinal imaging equipment. If you're a healthcare provider, we can integrate with most major brands of retinal imaging devices."
    },
    {
      question: "How do I get started with VisionAI?",
      answer: "Getting started is easy! Simply create an account, and we'll guide you through the process. For healthcare providers, we offer a comprehensive onboarding process including training and technical support."
    },
    {
      question: "What support options are available?",
      answer: "We offer 24/7 technical support via chat, email, and phone. Our clinical support team is available during business hours to answer medical questions, and we provide comprehensive documentation and training materials."
    },
    {
      question: "Can VisionAI replace my regular eye doctor?",
      answer: "No, VisionAI is designed to complement, not replace, your eye care professional. Our system helps doctors make more accurate diagnoses and catch potential issues early, but regular check-ups with your eye doctor are still essential."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "40vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
                  Frequently Asked Questions
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Find answers to common questions about VisionAI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is here to help you with any additional questions you may have
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}