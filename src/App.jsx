import { useState } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox";
import WeatherCard from "./Components/WeatherCard";
import ErrMsg from "./Components/errMsg";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Weather codes
  const codes = {
    0: { text: "Clear", tip: "Great day to be outside!", bg: "linear-gradient(to right, #fceabb, #f8b500)", icon: <WiDaySunny size={50} /> },
    1: { text: "Mainly clear", tip: "Looks nice out there.", bg: "linear-gradient(to right, #fdfbfb, #ebedee)", icon: <WiDaySunny size={50} /> },
    2: { text: "Partly cloudy", tip: "Maybe grab a light jacket.", bg: "linear-gradient(to right, #d7e1ec, #f0f4f8)", icon: <WiCloud size={50} /> },
    3: { text: "Overcast", tip: "Bit gloomy today.", bg: "linear-gradient(to right, #cfd8dc, #eceff1)", icon: <WiCloud size={50} /> },
    45: { text: "Fog", tip: "Low visibility, drive safe.", bg: "linear-gradient(to right, #b0bec5, #eceff1)", icon: <WiCloud size={50} /> },
    48: { text: "Rime Fog", tip: "Not the clearest day.", bg: "linear-gradient(to right, #90a4ae, #cfd8dc)", icon: <WiCloud size={50} /> },
    51: { text: "Drizzle", tip: "Carry a small umbrella.", bg: "linear-gradient(to right, #a1c4fd, #c2e9fb)", icon: <WiRain size={50} /> },
    53: { text: "Drizzle", tip: "Light rain possible.", bg: "linear-gradient(to right, #a1c4fd, #c2e9fb)", icon: <WiRain size={50} /> },
    55: { text: "Drizzle", tip: "Could get damp, stay dry.", bg: "linear-gradient(to right, #a1c4fd, #c2e9fb)", icon: <WiRain size={50} /> },
    61: { text: "Rain", tip: "Umbrella time.", bg: "linear-gradient(to right, #74ebd5, #9face6)", icon: <WiRain size={50} /> },
    63: { text: "Rain", tip: "Better keep rain gear handy.", bg: "linear-gradient(to right, #74ebd5, #9face6)", icon: <WiRain size={50} /> },
    65: { text: "Rain", tip: "Heavy rain, watch out.", bg: "linear-gradient(to right, #74ebd5, #9face6)", icon: <WiRain size={50} /> },
    71: { text: "Snow", tip: "Wrap up warm.", bg: "linear-gradient(to right, #e0f7fa, #b2ebf2)", icon: <WiSnow size={50} /> },
    73: { text: "Snow", tip: "Good for snow fun, careful though.", bg: "linear-gradient(to right, #e0f7fa, #b2ebf2)", icon: <WiSnow size={50} /> },
    75: { text: "Snow", tip: "Heavy snow, stay safe.", bg: "linear-gradient(to right, #e0f7fa, #b2ebf2)", icon: <WiSnow size={50} /> },
    80: { text: "Showers", tip: "Quick rain bursts, carry cover.", bg: "linear-gradient(to right, #74ebd5, #9face6)", icon: <WiRain size={50} /> },
    81: { text: "Showers", tip: "Short rains, watch out.", bg: "linear-gradient(to right, #74ebd5, #9face6)", icon: <WiRain size={50} /> },
    82: { text: "Showers", tip: "Strong showers today.", bg: "linear-gradient(to right, #74ebd5, #9face6)", icon: <WiRain size={50} /> },
    95: { text: "Thunderstorm", tip: "Stay inside, risky weather.", bg: "linear-gradient(to right, #616161, #212121)", icon: <WiThunderstorm size={50} /> },
    99: { text: "Hail", tip: "Protect yourself and your car.", bg: "linear-gradient(to right, #90a4ae, #607d8b)", icon: <WiThunderstorm size={50} /> },
  };

  const bgForWeather = (code) => {
    if ([0, 1, 2].includes(code)) return "linear-gradient(to right, #a0c4ff, #ffffff)";
    if ([3, 45, 48].includes(code)) return "linear-gradient(to right, #adb5bd, #ffffff)";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "linear-gradient(to right, #74c0fc, #228be6)";
    if ([71, 73, 75].includes(code)) return "linear-gradient(to right, #ffffff, #e0f7fa)";
    if ([95, 99].includes(code)) return "linear-gradient(to right, #495057, #212529)";
    return "linear-gradient(to right, #a0c4ff, #ffffff)";
  };

  const loadWeather = async (latitude, longitude, cityName = "") => {
    setLoading(true);
    setErrMsg("");
    setWeather(null);

    try {
      let name = cityName;
      let country = "";

      if (!latitude || !longitude) {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        );
        const geoData = await geoRes.json();
        if (!geoData.results?.length) throw new Error("City not found");

        const loc = geoData.results[0];
        latitude = loc.latitude;
        longitude = loc.longitude;
        name = loc.name;
        country = loc.country;
      }

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const code = weatherData.current_weather.weathercode;

      setWeather({
        location: `${name}${country ? ", " + country : ""}`,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        condition: codes[code]?.text || "Unknown",
        advice: codes[code]?.tip || "",
        icon: codes[code]?.icon || <WiDaySunny size={50} />,
        code,
        bg: codes[code]?.bg || bgForWeather(code),
      });
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setErrMsg("Geolocation not supported");
      alert("Geolocation not supported");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) =>
        loadWeather(position.coords.latitude, position.coords.longitude),
      () => {
        setLoading(false);
        setErrMsg("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div
      className="app"
      style={{ background: weather ? bgForWeather(weather.code) : undefined }}
    >
      {/* Word-by-word animated heading */}
      <h2 className="animated-heading">
        {"Hey Jamie! Want to check the weather before heading out?"
          .split(" ")
          .map((word, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              {word}&nbsp;
            </span>
          ))}
      </h2>

      <div className="flashcard">
        <h1>Weather Now</h1>
        <SearchBox
          city={city}
          setCity={setCity}
          getWeather={() => loadWeather(undefined, undefined, city)}
          handleUseLocation={handleUseLocation}
        />

        {loading && <div className="loader"></div>}
        {errMsg && <ErrMsg message={errMsg} />}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}
