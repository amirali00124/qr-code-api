import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DocumentationSection() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const codeExamples = {
    javascript: `const response = await fetch('https://api.qrcode.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data: 'https://example.com',
    size: 300,
    format: 'png',
    color: '#2563eb',
    error_correction: 'M'
  })
});

const result = await response.json();
console.log(result.qr_code_url);`,
    python: `import requests

response = requests.post('https://api.qrcode.com/v1/generate', 
  headers={
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  json={
    'data': 'https://example.com',
    'size': 300,
    'format': 'png',
    'color': '#2563eb',
    'error_correction': 'M'
  }
)

result = response.json()
print(result['qr_code_url'])`,
    php: `<?php
$data = array(
  'data' => 'https://example.com',
  'size' => 300,
  'format' => 'png',
  'color' => '#2563eb',
  'error_correction' => 'M'
);

$context = stream_context_create(array(
  'http' => array(
    'method' => 'POST',
    'header' => "Authorization: Bearer YOUR_API_KEY\r\n" .
                "Content-Type: application/json\r\n",
    'content' => json_encode($data)
  )
));

$result = file_get_contents('https://api.qrcode.com/v1/generate', false, $context);
$response = json_decode($result, true);
echo $response['qr_code_url'];
?>`,
    curl: `curl -X POST https://api.qrcode.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": "https://example.com",
    "size": 300,
    "format": "png",
    "color": "#2563eb",
    "error_correction": "M"
  }'`
  };

  return (
    <section id="documentation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            API Documentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, powerful REST API with comprehensive documentation and code examples in multiple languages.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* API Endpoints */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">API Endpoints</h3>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">POST</span>
                  <code className="text-gray-800 font-mono">/api/v1/generate</code>
                </div>
                <p className="text-gray-600 mb-4">Generate a new QR code with custom parameters</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-primary">data</code>
                    <span className="text-gray-500">string (required)</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-primary">size</code>
                    <span className="text-gray-500">integer (optional, default: 200)</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-primary">format</code>
                    <span className="text-gray-500">string (png|svg|jpg)</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-primary">color</code>
                    <span className="text-gray-500">hex color (optional)</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-primary">error_correction</code>
                    <span className="text-gray-500">string (L|M|Q|H)</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">GET</span>
                  <code className="text-gray-800 font-mono">/api/v1/info/{`{qr_id}`}</code>
                </div>
                <p className="text-gray-600">Retrieve information about a generated QR code</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">GET</span>
                  <code className="text-gray-800 font-mono">/api/v1/analytics</code>
                </div>
                <p className="text-gray-600">Get usage analytics and statistics</p>
              </div>
            </div>
          </div>
          
          {/* Code Examples */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Code Examples</h3>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-700">
                {Object.keys(codeExamples).map((lang) => (
                  <Button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    variant="ghost"
                    className={`px-4 py-3 text-sm font-medium border-r border-gray-700 rounded-none ${
                      selectedLanguage === lang 
                        ? 'text-white bg-gray-800' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang === 'javascript' ? 'JavaScript' : 
                     lang === 'python' ? 'Python' :
                     lang === 'php' ? 'PHP' : 'cURL'}
                  </Button>
                ))}
              </div>
              
              <div className="p-6">
                <pre className="text-sm">
                  <code className="text-gray-300">{codeExamples[selectedLanguage as keyof typeof codeExamples]}</code>
                </pre>
              </div>
            </div>
            
            {/* Response Example */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Example Response</h4>
              <div className="bg-gray-900 rounded-lg p-6">
                <pre className="text-sm">
                  <code className="text-green-400">
{`{
  "success": true,
  "qr_code_url": "https://cdn.qrcode.com/qr/abc123.png",
  "qr_id": "abc123",
  "format": "png",
  "size": "300x300",
  "data": "https://example.com",
  "color": "#2563eb",
  "error_correction": "M",
  "created_at": "2024-01-15T10:30:00Z",
  "expires_at": "2024-02-15T10:30:00Z"
}`}
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Error Handling */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Error Handling</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-medium text-red-800 mb-2">Common Error Codes</h5>
                <div className="text-sm text-red-700 space-y-1">
                  <div><code>400</code> - Invalid request parameters</div>
                  <div><code>401</code> - Invalid or missing API key</div>
                  <div><code>429</code> - Rate limit exceeded</div>
                  <div><code>500</code> - Internal server error</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
