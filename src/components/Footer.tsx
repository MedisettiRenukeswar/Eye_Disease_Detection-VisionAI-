import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 px-4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold">VisionAI</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing eye disease detection through artificial intelligence.
            </p>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 mb-8 md:mb-0">
                <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleLinkClick('/about')}
                      className="text-gray-400 hover:text-white"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('/services')}
                      className="text-gray-400 hover:text-white"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('/contact')}
                      className="text-gray-400 hover:text-white"
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('/faq')}
                      className="text-gray-400 hover:text-white"
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-4/12 mb-8 md:mb-0">
                <h5 className="text-lg font-semibold mb-4">Contact</h5>
                <ul className="space-y-2">
                  <li className="text-gray-400">contact@visionai.com</li>
                  <li className="text-gray-400">+1 (555) 123-4567</li>
                </ul>
              </div>
              <div className="w-full md:w-4/12">
                <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 VisionAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}