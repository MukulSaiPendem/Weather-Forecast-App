import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import HourlyForecast from './HourlyForecast';

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Boston,usa&appid=636a420943ee554eb55f241da6e4a91a');
        const data = await response.json();
        const dailyData = {};
        data.list.forEach((timePoint) => {
          const day = new Date(timePoint.dt * 1000).toLocaleDateString();
          if (!dailyData[day]) {
            dailyData[day] = [];
          }
          dailyData[day].push(timePoint);
        });

        Object.keys(dailyData).forEach(day => {
          dailyData[day].sort((a, b) => a.dt - b.dt);
        });

        setForecastData(dailyData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchForecastData();
  }, []);

  const handleDaySelect = (dayString) => {
    console.log('Day selected:', dayString);
    setSelectedDay(dayString);
    setHourlyData(forecastData[dayString] || []);
  };

  const sortedDays = Object.keys(forecastData).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="forecast-container">
      <h1>Weather Forecast</h1>
      <div className="daily-forecast">
        {sortedDays.map(day => {
          const dataPoints = forecastData[day];
          const date = new Date(dataPoints[0].dt * 1000);
          const dayString = date.toLocaleDateString();
          const isSelected = selectedDay === dayString;
          return (
            <WeatherCard
              key={dayString}
              date={dayString}
              temp={`${Math.round(dataPoints[0].main.temp - 273.15)} °C`}
              description={dataPoints[0].weather[0].description}
              icon={dataPoints[0].weather[0].icon}
              onSelect={() => handleDaySelect(dayString)}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      {selectedDay && <HourlyForecast hourlyData={hourlyData} />}
    </div>
  );
};

export default WeatherForecast;
