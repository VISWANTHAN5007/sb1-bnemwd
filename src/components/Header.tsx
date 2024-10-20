import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Map, AlertTriangle, User, BarChart2, Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car size={24} />
          <span className="text-xl font-bold">Tamil Nadu Road Safety System</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/map" className="flex items-center"><Map size={18} className="mr-1" /> Map</Link></li>
            <li><Link to="/report" className="flex items-center"><AlertTriangle size={18} className="mr-1" /> Report</Link></li>
            <li><Link to="/historical-data" className="flex items-center"><Clock size={18} className="mr-1" /> Historical Data</Link></li>
            <li><Link to="/predictive-analysis" className="flex items-center"><BarChart2 size={18} className="mr-1" /> Predictions</Link></li>
            <li><Link to="/login" className="flex items-center"><User size={18} className="mr-1" /> Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;