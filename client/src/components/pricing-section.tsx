import { Button } from "@/components/ui/button";
import { Check, X, CreditCard, RotateCcw, Shield } from "lucide-react";
import { RAPIDAPI_URL } from "@/config/rapidapi";

export default function PricingSection() {
  const redirectToRapidAPI = (plan: string) => {
    console.log(`Redirecting to RapidAPI ${plan} tier signup`);
    window.open(RAPIDAPI_URL, '_blank');
  };

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      originalPrice: null,
      savings: null,
      features: [
        { text: "500 requests/month", included: true },
        { text: "Basic formats (PNG only)", included: true },
        { text: "Community support", included: true },
        { text: "7-day QR storage", included: true },
        { text: "Analytics dashboard", included: false },
        { text: "Custom colors & sizes", included: false }
      ],
      cta: "Start Free Trial",
      plan: "free",
      buttonClass: "bg-gray-100 text-gray-700 hover:bg-gray-200"
    },
    {
      name: "Starter",
      price: "$5",
      originalPrice: "$15",
      savings: "67% OFF",
      features: [
        { text: "5,000 requests/month", included: true },
        { text: "All formats (PNG, JPG, SVG)", included: true },
        { text: "Email support", included: true },
        { text: "30-day QR storage", included: true },
        { text: "Basic analytics", included: true },
        { text: "Custom colors & sizes", included: true }
      ],
      cta: "Upgrade to Starter",
      plan: "starter",
      buttonClass: "bg-accent text-white hover:bg-green-600",
      badge: "LIMITED TIME"
    },
    {
      name: "Professional",
      price: "$19",
      originalPrice: "$39",
      savings: "51% OFF",
      popular: true,
      features: [
        { text: "50,000 requests/month", included: true },
        { text: "All formats + batch processing", included: true },
        { text: "Priority support (24h response)", included: true },
        { text: "90-day QR storage", included: true },
        { text: "Advanced analytics & insights", included: true },
        { text: "Custom logo embedding", included: true }
      ],
      cta: "Get Professional",
      plan: "professional",
      buttonClass: "bg-primary text-white hover:bg-blue-700",
      badge: "BEST VALUE"
    },
    {
      name: "Business",
      price: "$49",
      originalPrice: "$99",
      savings: "51% OFF",
      features: [
        { text: "500,000 requests/month", included: true },
        { text: "White-label API", included: true },
        { text: "Phone & email support", included: true },
        { text: "1-year QR storage", included: true },
        { text: "Team analytics dashboard", included: true },
        { text: "Custom integrations", included: true }
      ],
      cta: "Contact Sales",
      plan: "business",
      buttonClass: "bg-gray-900 text-white hover:bg-gray-800",
      badge: "ENTERPRISE"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features with different usage limits.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-sm p-8 relative ${
                tier.popular ? 'border-2 border-primary shadow-xl' : 'border border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}
              {tier.badge && !tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                    tier.badge === 'LIMITED TIME' ? 'bg-red-500 text-white' : 'bg-gray-800 text-white'
                  }`}>
                    {tier.badge}
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-6">
                  {tier.originalPrice && (
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-lg text-gray-400 line-through">{tier.originalPrice}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                        {tier.savings}
                      </span>
                    </div>
                  )}
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 mr-2" />
                      )}
                      <span className={feature.included ? '' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => redirectToRapidAPI(tier.plan)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${tier.buttonClass}`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">All plans include SSL encryption, 99.9% uptime guarantee, and global CDN.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <RotateCcw className="w-4 h-4 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              14-day money back
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
