import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tamil Nadu Road Safety System</h3>
            <p className="text-sm">Dedicated to making Tamil Nadu roads safer for everyone.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/map" className="hover:text-blue-300">Live Map</a></li>
              <li><a href="/report" className="hover:text-blue-300">Report Accident</a></li>
              <li><a href="/historical-data" className="hover:text-blue-300">Historical Data</a></li>
              <li><a href="/predictive-analysis" className="hover:text-blue-300">Predictions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>Emergency: 108</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@tnroadsafety.gov.in" className="hover:text-blue-300">info@tnroadsafety.gov.in</a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Tamil Nadu Road Safety System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;