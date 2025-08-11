import { QrCode } from "lucide-react";
import { SiX, SiGithub, SiLinkedin } from "react-icons/si";
import { RAPIDAPI_URL } from "@/config/rapidapi";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <QrCode className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">QRCode API</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional QR code generation API for developers. Fast, reliable, and scalable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiX size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => scrollToSection('demo')} className="hover:text-white transition-colors">Demo</button></li>
              <li><button onClick={() => scrollToSection('documentation')} className="hover:text-white transition-colors">Documentation</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
              <li>
                <button 
                  onClick={() => window.open(RAPIDAPI_URL, '_blank')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 QRCode API. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Powered by <a href="https://rapidapi.com" className="text-primary hover:text-blue-400 transition-colors">RapidAPI</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
