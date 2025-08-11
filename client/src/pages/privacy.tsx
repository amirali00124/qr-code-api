import { Header, Footer } from "@/components";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                When you use our QR Code API service through RapidAPI, we collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>API usage data (requests, responses, timestamps)</li>
                <li>QR code generation parameters (content, format, size, color)</li>
                <li>Account information provided by RapidAPI</li>
                <li>Technical data (IP address, user agent, error logs)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To provide QR code generation services</li>
                <li>To improve our API performance and reliability</li>
                <li>To provide usage analytics and insights</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Storage and Retention</h2>
              <p className="text-gray-700 mb-4">
                Generated QR codes are stored on our secure CDN for the following periods:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Free tier: 7 days</li>
                <li>Basic tier: 30 days</li>
                <li>Pro tier: 90 days</li>
                <li>Enterprise tier: 1 year (or custom arrangement)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Usage analytics and logs are retained for up to 2 years for service improvement and security purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell or rent your personal information. We may share data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>With RapidAPI for billing and account management</li>
                <li>With cloud service providers (AWS, Google Cloud) for hosting</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Security</h2>
              <p className="text-gray-700">
                We implement industry-standard security measures including encryption in transit and at rest, 
                access controls, regular security audits, and monitoring to protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your data and usage analytics</li>
                <li>Request deletion of your generated QR codes</li>
                <li>Correct inaccurate information</li>
                <li>Data portability</li>
                <li>Withdraw consent (where applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                For any privacy-related questions or requests, please contact us at:
                <br />
                Email: privacy@qrcode-api.com
                <br />
                Response time: Within 72 hours
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}