# Weather Forecast App

This repository contains the code for a weather forecast application. The application fetches weather data and displays it in a user-friendly interface, showing both daily and hourly forecasts.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Code Explanation](#code-explanation)
- [License](#license)

## Project Overview

The Weather Forecast App is designed to provide users with current weather information, including daily and hourly forecasts. The app is built using React and leverages external APIs to fetch the latest weather data.

## Features

- Display current weather conditions
- Show daily weather forecasts
- Provide hourly weather updates
- Responsive design for mobile and desktop

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/Weather-Forecast-App.git
   cd Weather-Forecast-App
   ```

2. **Install the required packages**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000` to view the Weather Forecast App.

## File Structure

The repository is organized as follows:

```
Weather-Forecast-App/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Day.js
│   │   ├── HourlyForecast.js
│   │   ├── WeatherCard.css
│   │   ├── WeatherCard.js
│   │   └── WeatherForecast.css
│   │   └── WeatherForecast.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Code Explanation

### Main Components

1. **App.js**:
   - The main component that sets up the structure of the application.
   - Imports necessary styles and other components.
   - Manages state and props to pass down data to child components.

2. **components/WeatherCard.js**:
   - Displays the weather information for a specific day.
   - Uses props to receive and display weather data such as temperature, weather condition, and date.
   - Styled with `WeatherCard.css`.

3. **components/WeatherForecast.js**:
   - Main component for displaying the weather forecast.
   - Fetches weather data from an external API.
   - Renders `WeatherCard` components for each day's forecast.
   - Styled with `WeatherForecast.css`.

4. **components/HourlyForecast.js**:
   - Displays the hourly weather forecast.
   - Receives and displays data for each hour within a day.

5. **components/Day.js**:
   - Utility component to format and display the day of the week.
   - Used by `WeatherCard` to show the day name.

### Supporting Files

- **index.js**:
  - Entry point for the React application.
  - Renders the `App` component into the DOM.
  
- **App.css, index.css**:
  - Contains global and component-specific styles.

- **package.json**:
  - Lists dependencies and scripts for the project.
  
- **public/index.html**:
  - Main HTML file that serves the React application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
