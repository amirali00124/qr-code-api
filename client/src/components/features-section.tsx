import { Zap, Palette, Wifi, Shield, Code, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate QR codes in under 200ms with our optimized infrastructure and global CDN.",
      color: "bg-primary"
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description: "Custom colors, sizes, error correction levels, and multiple output formats (PNG, SVG, JPG).",
      color: "bg-accent"
    },
    {
      icon: Wifi,
      title: "Multiple Data Types",
      description: "Support for URLs, text, WiFi credentials, vCards, email, phone numbers, and more.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability with redundant servers and automatic failover protection.",
      color: "bg-green-500"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "RESTful API with comprehensive documentation and SDKs for popular languages.",
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Tracking",
      description: "Built-in analytics to track QR code generation, usage patterns, and performance metrics.",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our QR Code API?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for developers who need reliable, scalable QR code generation with enterprise-grade features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
