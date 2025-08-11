import { Button } from "@/components/ui/button";
import { QrCode, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import { RAPIDAPI_URL } from "@/config/rapidapi";

export default function Header() {
  const [location] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const redirectToRapidAPI = () => {
    window.open(RAPIDAPI_URL, '_blank');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <QrCode className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold text-gray-900">QRCode API</span>
              </div>
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              {location !== '/' && (
                <Link href="/">
                  <span className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              )}
              {location === '/' && (
                <>
                  <button 
                    onClick={() => scrollToSection('demo')}
                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Demo
                  </button>
                  <button 
                    onClick={() => scrollToSection('documentation')}
                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Documentation
                  </button>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Pricing
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    FAQ
                  </button>
                </>
              )}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              onClick={redirectToRapidAPI}
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get API Key
            </Button>
            <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
