import { Header, Footer } from "@/components";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using our QR Code API service through RapidAPI, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Our QR Code API provides programmatic generation of QR codes with the following features:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Multiple data types (URLs, text, WiFi, email, phone, vCard)</li>
                <li>Various output formats (PNG, JPG, SVG)</li>
                <li>Customizable appearance (size, color, error correction)</li>
                <li>Usage analytics and tracking</li>
                <li>Global CDN delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Usage Limits and Billing</h2>
              <p className="text-gray-700 mb-4">
                Service usage is governed by your RapidAPI subscription plan:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Free: 500 requests/month</li>
                <li>Starter ($5/month): 5,000 requests/month</li>
                <li>Professional ($19/month): 50,000 requests/month</li>
                <li>Business ($49/month): 500,000 requests/month</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Overage charges apply for usage exceeding plan limits. Billing is handled by RapidAPI according to their terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 mb-4">You agree NOT to use our service for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Illegal activities or content</li>
                <li>Spam, phishing, or malicious content</li>
                <li>Violating intellectual property rights</li>
                <li>Circumventing rate limits or security measures</li>
                <li>Reverse engineering or creating competing services</li>
                <li>Generating QR codes for adult content or violence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Ownership and Content</h2>
              <p className="text-gray-700 mb-4">
                You retain ownership of the content you submit for QR code generation. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You grant us license to process and store your content for service delivery</li>
                <li>Generated QR codes are stored temporarily according to your plan</li>
                <li>You are responsible for ensuring you have rights to all submitted content</li>
                <li>We may analyze usage patterns for service improvement (anonymized)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
              <p className="text-gray-700">
                We strive for 99.9% uptime but do not guarantee uninterrupted service. We may perform maintenance with reasonable notice. 
                No refunds for temporary service interruptions under 24 hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                Our liability is limited to the amount paid for the service in the preceding 12 months. 
                We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700">
                Either party may terminate this agreement at any time. We may suspend service immediately for violations. 
                Upon termination, your access ends and stored QR codes may be deleted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700">
                We may modify these terms with 30 days notice. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700">
                For questions about these terms:
                <br />
                Email: legal@qrcode-api.com
                <br />
                Support: support@qrcode-api.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}