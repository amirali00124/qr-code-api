import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started with the QR Code API?",
      answer: "Simply sign up for a free account on RapidAPI, subscribe to our QR Code API, and get your API key. You can start generating QR codes immediately with our RESTful endpoints."
    },
    {
      question: "What data types can I encode in QR codes?",
      answer: "Our API supports text, URLs, WiFi credentials, email addresses, phone numbers, vCards (contact information), SMS messages, and custom data formats. You can encode up to 4,296 alphanumeric characters."
    },
    {
      question: "What output formats are supported?",
      answer: "We support PNG, JPG, and SVG formats. PNG is recommended for web use, SVG for scalable graphics, and JPG for smaller file sizes. All formats support custom colors and sizes."
    },
    {
      question: "Is there a rate limit?",
      answer: "Rate limits depend on your subscription plan. Free tier allows 1,000 requests/month, Basic allows 10,000/month, Pro allows 100,000/month, and Enterprise allows 1,000,000/month. Higher limits available upon request."
    },
    {
      question: "How long are generated QR codes stored?",
      answer: "QR codes are stored on our secure CDN with different retention periods: Free (7 days), Starter (30 days), Professional (90 days), Business (1 year). This ensures fast global delivery and allows you to access previously generated codes. You can also download and host the images yourself for permanent storage."
    },
    {
      question: "What analytics do you provide?",
      answer: "Our analytics dashboard tracks: total QR codes generated, most popular data types, format preferences, generation timestamps, usage patterns over time, and API performance metrics. Professional and Business plans include advanced insights like geographic usage distribution, peak usage times, and custom reporting. All data is anonymized and helps optimize your QR code strategy."
    },
    {
      question: "How does the analytics tracking work?",
      answer: "Every API call is logged with metadata (timestamp, format, size, data type) but not the actual content for privacy. This creates usage patterns and insights displayed in your dashboard. We track generation frequency, popular formats, and performance metrics. No personal data from QR code content is stored or analyzed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our QR Code API
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
