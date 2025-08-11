import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QrCode, Download } from "lucide-react";

export default function DemoSection() {
  const [selectedType, setSelectedType] = useState("text");
  const [content, setContent] = useState("Hello World!");
  const [size, setSize] = useState(200);
  const [color, setColor] = useState("#000000");
  const [format, setFormat] = useState("png");

  const generateQR = () => {
    console.log('Generating QR code with:', { selectedType, content, size, color, format });
  };

  const downloadQR = () => {
    console.log('Downloading QR code');
  };

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Try Our QR Code Generator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test the API functionality with our interactive playground. Generate QR codes in real-time and see the results instantly.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Demo Controls */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Configuration</h3>
              
              <div className="space-y-6">
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">QR Code Type</Label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Plain Text</SelectItem>
                      <SelectItem value="url">Website URL</SelectItem>
                      <SelectItem value="wifi">WiFi Network</SelectItem>
                      <SelectItem value="email">Email Address</SelectItem>
                      <SelectItem value="phone">Phone Number</SelectItem>
                      <SelectItem value="vcard">Contact Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">Content</Label>
                  <Textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter your content here..."
                    className="w-full h-24 resize-none"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">Size (px)</Label>
                    <Input 
                      type="number"
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                      min={100}
                      max={1000}
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">Color</Label>
                    <Input 
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">Output Format</Label>
                  <RadioGroup value={format} onValueChange={setFormat} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="png" id="png" />
                      <Label htmlFor="png">PNG</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="svg" id="svg" />
                      <Label htmlFor="svg">SVG</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="jpg" id="jpg" />
                      <Label htmlFor="jpg">JPG</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <Button onClick={generateQR} className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
              </div>
            </div>
            
            {/* Demo Output */}
            <div className="p-8 bg-gray-50 border-l border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Preview</h3>
                <Button onClick={downloadQR} variant="ghost" className="text-primary hover:text-blue-700 text-sm font-medium">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="inline-block p-4 bg-white rounded-lg shadow-sm border">
                  <div className="w-48 h-48 bg-gray-100 rounded flex items-center justify-center">
                    <svg 
                      width="160" 
                      height="160" 
                      viewBox="0 0 25 25" 
                      className="rounded"
                      style={{ backgroundColor: 'white' }}
                    >
                      {/* QR Code Pattern - Top Left Corner */}
                      <rect x="0" y="0" width="7" height="7" fill={color} />
                      <rect x="1" y="1" width="5" height="5" fill="white" />
                      <rect x="2" y="2" width="3" height="3" fill={color} />
                      
                      {/* QR Code Pattern - Top Right Corner */}
                      <rect x="18" y="0" width="7" height="7" fill={color} />
                      <rect x="19" y="1" width="5" height="5" fill="white" />
                      <rect x="20" y="2" width="3" height="3" fill={color} />
                      
                      {/* QR Code Pattern - Bottom Left Corner */}
                      <rect x="0" y="18" width="7" height="7" fill={color} />
                      <rect x="1" y="19" width="5" height="5" fill="white" />
                      <rect x="2" y="20" width="3" height="3" fill={color} />
                      
                      {/* Timing patterns */}
                      <rect x="8" y="6" width="1" height="1" fill={color} />
                      <rect x="10" y="6" width="1" height="1" fill={color} />
                      <rect x="12" y="6" width="1" height="1" fill={color} />
                      <rect x="14" y="6" width="1" height="1" fill={color} />
                      <rect x="16" y="6" width="1" height="1" fill={color} />
                      
                      <rect x="6" y="8" width="1" height="1" fill={color} />
                      <rect x="6" y="10" width="1" height="1" fill={color} />
                      <rect x="6" y="12" width="1" height="1" fill={color} />
                      <rect x="6" y="14" width="1" height="1" fill={color} />
                      <rect x="6" y="16" width="1" height="1" fill={color} />
                      
                      {/* Data modules - random pattern */}
                      <rect x="9" y="9" width="1" height="1" fill={color} />
                      <rect x="11" y="9" width="1" height="1" fill={color} />
                      <rect x="13" y="9" width="1" height="1" fill={color} />
                      <rect x="15" y="9" width="1" height="1" fill={color} />
                      
                      <rect x="10" y="11" width="1" height="1" fill={color} />
                      <rect x="12" y="11" width="1" height="1" fill={color} />
                      <rect x="14" y="11" width="1" height="1" fill={color} />
                      
                      <rect x="9" y="13" width="1" height="1" fill={color} />
                      <rect x="11" y="13" width="1" height="1" fill={color} />
                      <rect x="13" y="13" width="1" height="1" fill={color} />
                      <rect x="15" y="13" width="1" height="1" fill={color} />
                      
                      <rect x="10" y="15" width="1" height="1" fill={color} />
                      <rect x="12" y="15" width="1" height="1" fill={color} />
                      <rect x="14" y="15" width="1" height="1" fill={color} />
                      
                      <rect x="9" y="17" width="1" height="1" fill={color} />
                      <rect x="11" y="17" width="1" height="1" fill={color} />
                      <rect x="13" y="17" width="1" height="1" fill={color} />
                      <rect x="15" y="17" width="1" height="1" fill={color} />
                      
                      {/* Additional data patterns */}
                      <rect x="18" y="9" width="1" height="1" fill={color} />
                      <rect x="19" y="10" width="1" height="1" fill={color} />
                      <rect x="20" y="11" width="1" height="1" fill={color} />
                      <rect x="21" y="12" width="1" height="1" fill={color} />
                      <rect x="22" y="13" width="1" height="1" fill={color} />
                      <rect x="23" y="14" width="1" height="1" fill={color} />
                      
                      <rect x="9" y="20" width="1" height="1" fill={color} />
                      <rect x="10" y="21" width="1" height="1" fill={color} />
                      <rect x="11" y="22" width="1" height="1" fill={color} />
                      <rect x="12" y="23" width="1" height="1" fill={color} />
                      <rect x="13" y="24" width="1" height="1" fill={color} />
                    </svg>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-medium text-gray-700">Generated QR Code</p>
                  <p className="text-xs text-gray-500">Content: {content}</p>
                  <p className="text-xs text-gray-500">{size}x{size}px • {format.toUpperCase()} • {color}</p>
                  <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-600 font-medium">
                      📱 Demo Preview Only - Real API generates scannable QR codes
                    </p>
                  </div>
                </div>
              </div>
              
              {/* API Response Preview */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">API Response</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                  <pre className="text-green-400">
{`{
  "success": true,
  "qr_code_url": "https://api.qrcode.com/v1/generate/abc123",
  "format": "${format}",
  "size": "${size}x${size}",
  "data": "${content}",
  "timestamp": "${new Date().toISOString()}"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
