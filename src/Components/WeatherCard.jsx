import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog, WiHail } from "react-icons/wi";

export default function WeatherCard({ weather }) {
  const getWeatherIcon = (code) => {
    if ([0, 1].includes(code)) return <WiDaySunny size={50} />;
    if ([2, 3].includes(code)) return <WiCloud size={50} />;
    if ([45, 48].includes(code)) return <WiFog size={50} />;
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return <WiRain size={50} />;
    if ([71, 73, 75].includes(code)) return <WiSnow size={50} />;
    if ([95].includes(code)) return <WiThunderstorm size={50} />;
    if ([99].includes(code)) return <WiHail size={50} />;
    return <WiDaySunny size={50} />; // default
  };

  return (
    <div className="weather-card">
      <h2>{weather.location}</h2>
      <div style={{ fontSize: "3rem", margin: "1rem 0" }}>
        {getWeatherIcon(weather.code)}
      </div>
      <p>Here, Temperature is {weather.temp}°C</p>
      <p>Wind speed is 💨 {weather.wind} km/h</p>
      <p>Weather condition is {weather.condition}</p>
      <p>Advice: {weather.advice}</p>
    </div>
  );
}