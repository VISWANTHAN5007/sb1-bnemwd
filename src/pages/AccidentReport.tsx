import React, { useState } from 'react';
import { MapPin, Camera, FileText, AlertTriangle } from 'lucide-react';

const AccidentReport: React.FC = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('minor');
  const [vehiclesInvolved, setVehiclesInvolved] = useState('');
  const [injuries, setInjuries] = useState('');
  const [roadCondition, setRoadCondition] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting report:', { location, description, severity, vehiclesInvolved, injuries, roadCondition });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Report an Accident</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          {/* ... (previous form fields remain unchanged) ... */}
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehiclesInvolved">
              Vehicles Involved
            </label>
            <input
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border rounded"
              id="vehiclesInvolved"
              type="text"
              placeholder="e.g., 2 cars, 1 motorcycle"
              value={vehiclesInvolved}
              onChange={(e) => setVehiclesInvolved(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="injuries">
              Injuries
            </label>
            <input
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border rounded"
              id="injuries"
              type="text"
              placeholder="Describe any injuries"
              value={injuries}
              onChange={(e) => setInjuries(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roadCondition">
              Road Condition
            </label>
            <select
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border rounded"
              id="roadCondition"
              value={roadCondition}
              onChange={(e) => setRoadCondition(e.target.value)}
            >
              <option value="">Select road condition</option>
              <option value="dry">Dry</option>
              <option value="wet">Wet</option>
              <option value="icy">Icy</option>
              <option value="foggy">Foggy</option>
              <option value="under_construction">Under Construction</option>
            </select>
          </div>
          
          {/* ... (rest of the form remains unchanged) ... */}
        </form>
      </div>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6" role="alert">
        <div className="flex">
          <div className="py-1">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4" />
          </div>
          <div>
            <p className="font-bold">Important Note</p>
            <p>If this is an emergency, please call 108 for immediate assistance. Your safety is our top priority.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentReport;