import React from 'react';
import { Award, Users, Brain, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function About() {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Michael Roberts",
      role: "AI Research Director",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Clinical Director",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "James Wilson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "60vh",
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
                  About VisionAI
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Pioneering the future of eye care through artificial intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Vision AI Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-6/12 px-4">
              <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                At VisionAI, we're committed to revolutionizing eye care through cutting-edge artificial intelligence. Our mission is to make early detection of eye diseases accessible to everyone, everywhere.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Excellence</h3>
                  <p className="text-gray-600">95%+ accuracy rate</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Impact</h3>
                  <p className="text-gray-600">1M+ patients helped</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Brain className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Innovation</h3>
                  <p className="text-gray-600">Advanced AI tech</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Globe className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Reach</h3>
                  <p className="text-gray-600">Global presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts behind VisionAI's revolutionary technology
            </p>
          </div>
          <div className="flex flex-wrap">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-3/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}