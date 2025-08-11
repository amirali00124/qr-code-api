import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function CtaSection() {
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
    <section className="py-20 gradient-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Start Generating QR Codes?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who trust our QR Code API for their applications. Get started with our free tier and scale as you grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={redirectToRapidAPI}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Get Your API Key
          </Button>
          <Button 
            onClick={scrollToDemo}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/10"
          >
            <Play className="w-4 h-4 mr-2" />
            Try Demo First
          </Button>
        </div>
        <p className="text-blue-200 text-sm mt-6">
          No credit card required • Free tier available • Start in minutes
        </p>
      </div>
    </section>
  );
}
