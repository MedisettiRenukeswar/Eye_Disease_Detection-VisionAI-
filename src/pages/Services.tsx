import React from 'react';
import { 
  Brain,
  Microscope,
  HeartPulse,
  CloudCog,
  Stethoscope,
  FileHeart
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms for accurate eye disease detection and early diagnosis.",
      features: ["Real-time analysis", "High accuracy rates", "Multiple disease detection"]
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: "Detailed Eye Analysis",
      description: "Comprehensive eye examination using state-of-the-art computer vision technology.",
      features: ["Retinal scanning", "Pressure measurement", "3D eye mapping"]
    },
    {
      icon: <HeartPulse className="w-12 h-12" />,
      title: "Preventive Care",
      description: "Proactive monitoring and prevention strategies for maintaining optimal eye health.",
      features: ["Regular monitoring", "Risk assessment", "Prevention plans"]
    },
    {
      icon: <CloudCog className="w-12 h-12" />,
      title: "Cloud Integration",
      description: "Secure cloud-based storage and access to your eye health records and analysis results.",
      features: ["24/7 access", "Secure storage", "Easy sharing"]
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Expert Consultation",
      description: "Connect with experienced ophthalmologists for professional medical advice and treatment plans.",
      features: ["Video consultations", "Expert network", "Quick response"]
    },
    {
      icon: <FileHeart className="w-12 h-12" />,
      title: "Personalized Care",
      description: "Tailored treatment plans based on your unique eye health profile and needs.",
      features: ["Custom plans", "Progress tracking", "Adaptive care"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "60vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
                  Our Services
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Comprehensive AI-powered solutions for eye health
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">
              Discover our range of innovative eye care services powered by artificial intelligence
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of patients who trust VisionAI for their eye care needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}