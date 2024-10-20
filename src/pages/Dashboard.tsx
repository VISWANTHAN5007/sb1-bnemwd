import React, { useEffect, useState } from 'react';
import { BarChart, MapPin, AlertTriangle, Droplets, TrendingUp, Clock, Car, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchWeatherData, fetchTrafficData } from '../services/realTimeData';

const Dashboard: React.FC = () => {
  // ... (existing state and useEffect)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tamil Nadu Road Safety Dashboard</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Current Weather" 
          value={weatherData ? `${weatherData.main.temp}°C, ${weatherData.weather[0].description}` : 'Loading...'} 
          icon={<Droplets className="text-blue-500" />} 
        />
        <StatCard 
          title="Traffic Density" 
          value={trafficData ? `${trafficData.flowSegmentData.currentSpeed} km/h` : 'Loading...'} 
          icon={<BarChart className="text-red-500" />} 
        />
        <StatCard 
          title="Accidents Today" 
          value="12" 
          icon={<Car className="text-yellow-500" />} 
        />
        <StatCard 
          title="Lives Saved" 
          value="238" 
          icon={<Users className="text-green-500" />} 
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Accident Hotspots</h2>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            {/* Placeholder for map */}
            <p className="text-gray-500">Interactive map will be displayed here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            <AlertItem
              title="Heavy Traffic"
              description="Congestion reported on Anna Salai due to ongoing metro work."
              time="10 minutes ago"
            />
            <AlertItem
              title="Weather Warning"
              description="Heavy rainfall expected in Chennai. Drive carefully."
              time="30 minutes ago"
            />
            <AlertItem
              title="Accident Reported"
              description="Minor collision on ECR, near Mahabalipuram. Emergency services on scene."
              time="1 hour ago"
            />
          </div>
          <Link to="/map" className="text-blue-600 hover:underline mt-4 inline-block">View all alerts</Link>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuickActionCard
          title="Report an Incident"
          description="Help improve road safety by reporting accidents or hazards."
          icon={<AlertTriangle className="text-red-500" size={40} />}
          linkTo="/report"
        />
        <QuickActionCard
          title="View Predictions"
          description="See accident risk predictions for your route."
          icon={<TrendingUp className="text-blue-500" size={40} />}
          linkTo="/predictive-analysis"
        />
        <QuickActionCard
          title="Safety Tips"
          description="Learn how to stay safe on Tamil Nadu roads."
          icon={<Shield className="text-green-500" size={40} />}
          linkTo="/safety-guide"
        />
      </div>
    </div>
  );
};

// ... (existing StatCard and AlertItem components)

const QuickActionCard: React.FC<{ title: string; description: string; icon: React.ReactNode; linkTo: string }> = ({ title, description, icon, linkTo }) => {
  return (
    <Link to={linkTo} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default Dashboard;