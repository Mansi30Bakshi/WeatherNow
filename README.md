WeatherNow

WeatherNow is a clean and interactive React application that lets you check the current weather for any city or your current location. The app provides real-time weather information with dynamic background, icons, and helpful tips.

Features

🔹 Search for any city to get real-time weather.

🔹 Use your device’s location to fetch weather instantly.

🔹 Weather card shows:

City & Country

Temperature

Wind speed

Weather condition & icon

Advice/tip for the day

🔹 Dynamic background gradients according to weather conditions.

🔹 Responsive design for mobile and desktop.

🔹 Loading indicator and user-friendly error messages.

Technologies Used

Framework: React

Styling: CSS with responsive design & simple animations

API: Open-Meteo

Icons: react-icons/wi

State Management: React useState hook

How It Works

Search City: Type a city name and click Search City.

Use My Location: Click Use My Location to fetch weather for your coordinates.

Weather Card: Displays weather details including condition, temperature, wind, and advice.

Background: Changes dynamically based on weather code.

Error Handling: Shows a friendly error message if city not found or location access is denied.

Setup Instructions
Run Locally

Clone the repo:

git clone <your-repo-url>


Navigate to project folder:

cd WeatherNow


Install dependencies:

npm install


Start the app:

npm start


Open http://localhost:5173
 in your browser.

Live Demo

The application is deployed and accessible online:
https://x3nqvp-5173.csb.app/

Folder Structure
WeatherNow/
├─ public/
├─ src/
│  ├─ Components/
│  │  ├─ SearchBox.jsx
│  │  ├─ WeatherCard.jsx
│  │  └─ ErrMsg.jsx
│  ├─ App.jsx
│  ├─ App.css
│  └─ index.js
├─ package.json
└─ README.md

Screenshot


Your app displays weather for Noida with dynamic background and icons.

Future Improvements

Add forecast for the next few days.

Allow switching between Celsius & Fahrenheit.

Add animations for weather icons (rain, snow, etc.).

Store recent searches for quick access.

Credits

Weather API: Open-Meteo

Icons: React Icons - Weather Icons

License

Open source and free to use for learning and demonstration purposes.
