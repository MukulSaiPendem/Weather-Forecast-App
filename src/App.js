import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherForecast from './Components/WeatherForecast';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom styling

function App() {
  return (
    <Routes>
      <Route path="/" element={<WeatherForecast />} />
      {/* Define other routes as needed */}
    </Routes>
  );
}

export default App;