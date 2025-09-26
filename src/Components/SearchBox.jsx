import React from 'react'

function SearchBox({ city, setCity, getWeather, handleUseLocation }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && getWeather()}
      />
      <button onClick={getWeather}>Search City</button>
      OR
      <button onClick={handleUseLocation}>Use My Location</button>
    </div>
  );
}

export default SearchBox