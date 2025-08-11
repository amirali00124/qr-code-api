import { Button } from "@/components/ui/button";
import { Rocket, Play, CheckCircle, Shield, Globe } from "lucide-react";

export default function HeroSection() {
  const redirectToRapidAPI = () => {
    window.open('https://rapidapi.com/hub', '_blank');
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Production-Ready API
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional QR Code Generation 
              <span className="text-primary"> API</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Generate high-quality QR codes programmatically with our robust REST API. Support for multiple formats, custom colors, and advanced error correction. Trusted by developers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={redirectToRapidAPI}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Start Free Trial
              </Button>
              <Button 
                onClick={scrollToDemo}
                variant="outline"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <Play className="w-4 h-4 mr-2" />
                Try Demo
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                99.9% Uptime
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                Secure & Reliable
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-green-500 mr-2" />
                Global CDN
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 mb-3 flex items-center justify-center h-32">
                    <div className="w-20 h-20 bg-gray-800 rounded qr-code-pattern"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Website URL</p>
                  <p className="text-xs text-gray-500">https://example.com</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 mb-3 flex items-center justify-center h-32">
                    <div className="w-20 h-20 bg-primary rounded qr-code-pattern"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">WiFi Network</p>
                  <p className="text-xs text-gray-500">SSID: MyNetwork</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 mb-3 flex items-center justify-center h-32">
                    <div className="w-20 h-20 bg-accent rounded qr-code-pattern"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Contact Info</p>
                  <p className="text-xs text-gray-500">vCard Format</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 mb-3 flex items-center justify-center h-32">
                    <div className="w-20 h-20 bg-gray-600 rounded qr-code-pattern"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Plain Text</p>
                  <p className="text-xs text-gray-500">Custom Message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
