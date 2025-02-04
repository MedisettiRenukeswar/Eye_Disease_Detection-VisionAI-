import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
                  AI-Powered Eye Disease Detection
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Early detection and prevention through advanced artificial intelligence
                </p>
                <Link
                  to="/services"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md inline-block mt-8 hover:bg-blue-700 transition duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blue-600">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h6 className="text-xl font-semibold">AI Technology</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Advanced machine learning algorithms for accurate disease detection
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blue-600">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h6 className="text-xl font-semibold">Secure & Private</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Your health data is protected with enterprise-grade security
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blue-600">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h6 className="text-xl font-semibold">24/7 Analysis</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Get results quickly with our automated analysis system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}