# WeatherNow

WeatherNow is a clean and interactive **React application** that lets you check the current weather for any city or your current location. The app provides **real-time weather information** with dynamic backgrounds, icons, and helpful tips.

---

## ✨ Features

- 🔍 **Search for any city** to get real-time weather  
- 📍 **Use your device’s location** to fetch weather instantly  
- 🌤️ **Weather Card shows:**
  - City & Country  
  - Temperature  
  - Wind speed  
  - Weather condition & icon  
  - Advice/tip for the day  
- 🎨 **Dynamic background gradients** according to weather conditions  
- 📱 **Responsive design** for mobile and desktop  
- ⏳ **Loading indicator** and user-friendly error messages  

---

## 🛠️ Technologies Used

- **Framework:** React  
- **Styling:** CSS (responsive design & simple animations)  
- **API:** [Open-Meteo](https://open-meteo.com/)  
- **Icons:** [react-icons/wi](https://react-icons.github.io/react-icons/)  
- **State Management:** React `useState` hook  

---

## ⚙️ How It Works

1. **Search City** – Type a city name and click **Search City**.  
2. **Use My Location** – Click **Use My Location** to fetch weather for your coordinates.  
3. **Weather Card** – Displays weather details (condition, temperature, wind, and advice).  
4. **Dynamic Background** – Changes according to weather conditions.  
5. **Error Handling** – Friendly error message shown if city not found or location access denied.  

---

## 🚀 Setup Instructions

### Run Locally

Clone the repo:
```bash
git clone <your-repo-url>
Navigate to project folder:

bash
Copy code
cd WeatherNow
Install dependencies:

bash
Copy code
npm install
Start the app:

bash
Copy code
npm start
Open in your browser:

arduino
Copy code
http://localhost:5173
🌐 Live Demo
The application is deployed and accessible online:
https://x3nqvp-5173.csb.app/

📂 Folder Structure
pgsql
Copy code
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


🔮 Future Improvements
Add forecast for the next few days

Allow switching between Celsius & Fahrenheit

Add animations for weather icons (rain, snow, etc.)

Store recent searches for quick access

🙌 Credits
Weather API: Open-Meteo

Icons: React Icons - Weather Icons

📜 License
This project is open source and free to use for learning and demonstration purposes.
