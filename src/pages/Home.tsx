import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, AlertCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Car Accident Prediction System</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Shield className="w-12 h-12 text-blue-500" />}
          title="Predict Accidents"
          description="Use advanced algorithms to predict potential accidents and choose safer routes."
        />
        <FeatureCard
          icon={<TrendingUp className="w-12 h-12 text-green-500" />}
          title="Real-time Updates"
          description="Get live updates on traffic, weather, and road conditions affecting your journey."
        />
        <FeatureCard
          icon={<AlertCircle className="w-12 h-12 text-red-500" />}
          title="Accident Reporting"
          description="Report accidents and contribute to safer roads for everyone."
        />
      </div>
      <div className="text-center mt-12">
        <Link to="/map" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Start Your Safe Journey
        </Link>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;