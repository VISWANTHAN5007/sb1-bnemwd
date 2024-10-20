import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import AccidentReport from './pages/AccidentReport';
import HistoricalData from './pages/HistoricalData';
import PredictiveAnalysis from './pages/PredictiveAnalysis';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/report" element={<AccidentReport />} />
            <Route path="/historical-data" element={<HistoricalData />} />
            <Route path="/predictive-analysis" element={<PredictiveAnalysis />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;