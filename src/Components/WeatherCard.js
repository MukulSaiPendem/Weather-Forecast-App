// WeatherCard.js
import React from 'react';

// Helper function to format the date
const formatDate = (date) => {
  // Formats the date to a readable format, e.g., "Mon, Jan 1"
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

const WeatherCard = ({ date, temp, description, icon, onSelect, isSelected }) => {
  // Ensure that `formatDate` is called with a Date object
  const formattedDate = formatDate(new Date(date));
  const cardClasses = `weather-card ${isSelected ? 'selected' : ''}`

  return (
    <div className={cardClasses} onClick={onSelect}> {/* Use Bootstrap card class */}
      <div className="card-body">
        <h5 className="card-title">{formattedDate}</h5> {/* Use Bootstrap card-title class */}
        <div className="weather-info d-flex align-items-center justify-content-center flex-column">
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="weather"
            className="card-img-top" // Bootstrap class for image
          />
          <p className="card-text">{temp}</p> {/* Use Bootstrap card-text class */}
          <p className="card-text">{description}</p> {/* Use Bootstrap card-text class */}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
