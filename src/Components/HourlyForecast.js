const HourlyForecast = ({ hourlyData }) => {
  return (
    <div>
      <h2>Hourly Forecast</h2>
      {hourlyData.map((hour) => {
        const date = new Date(hour.dt * 1000);
        return (
          <div key={hour.dt}>
            {`${date.getHours()}:00: ${hour.weather[0].description}, ${Math.round(hour.main.temp - 273.15)} °C`}
          </div>
        );
      })}
    </div>
  );
};


export default HourlyForecast;
