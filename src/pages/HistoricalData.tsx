import React from 'react';
import { BarChart2, PieChart, TrendingUp, Calendar } from 'lucide-react';

const HistoricalData: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Historical Accident Data Analysis</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart2 className="mr-2" /> Yearly Accident Trends
          </h2>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            {/* Placeholder for yearly trend chart */}
            <p className="text-gray-500">Yearly accident trend chart will be displayed here</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <PieChart className="mr-2" /> Accident Causes Distribution
          </h2>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            {/* Placeholder for pie chart */}
            <p className="text-gray-500">Accident causes pie chart will be displayed here</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2" /> Accident Hotspots
        </h2>
        <div className="h-96 bg-gray-100 flex items-center justify-center">
          {/* Placeholder for heatmap */}
          <p className="text-gray-500">Tamil Nadu accident hotspot heatmap will be displayed here</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" /> Monthly Statistics (Last 12 Months)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Month</th>
                <th className="py-2 px-4 border-b">Total Accidents</th>
                <th className="py-2 px-4 border-b">Fatalities</th>
                <th className="py-2 px-4 border-b">Injuries</th>
                <th className="py-2 px-4 border-b">Most Common Cause</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data - replace with actual data */}
              <tr>
                <td className="py-2 px-4 border-b">August 2023</td>
                <td className="py-2 px-4 border-b">245</td>
                <td className="py-2 px-4 border-b">32</td>
                <td className="py-2 px-4 border-b">178</td>
                <td className="py-2 px-4 border-b">Overspeeding</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">July 2023</td>
                <td className="py-2 px-4 border-b">278</td>
                <td className="py-2 px-4 border-b">41</td>
                <td className="py-2 px-4 border-b">203</td>
                <td className="py-2 px-4 border-b">Drunk Driving</td>
              </tr>
              {/* Add more rows for previous months */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoricalData;