import { useState } from "react"
import axios from "axios"
import { Search, Wind, Droplets, ThermometerSun, MapPin, Loader2 } from "lucide-react"

interface WeatherData{
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`

      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      setError('City not found! Please check your typos.');
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">

      <div className="bg-glass backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden">
    
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-4xl font-bold tracking-tighter mb-2">SKY CAST</h1>
          <p className="text-white/70 text-sm">Real-Time Forecast</p>  
        </div>

        <div className="flex gap-2 mb-8 relative z-10">
          <input
            type="text"
            placeholder="Enter the city..."
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3  outline-none focus:bg-white/20 transition-all placeholder:text-white/50"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
          />

          <button
            onClick={fetchWeather}
            className="bg-white/20 hover:bg-white/30 border border-white/20 p-3 rounded-xl transition-all active:scale-95">
              {loading ? <Loader2 className="animate-spin" /> : <Search />}
          </button>
        </div>

        {error && (
          <div className="text-red-200 text-center mb-6 bg-red-500/20 p-3 rounded-lg border border-red-500/30">
          {error}
          </div>
        )}

        {weather && (
          <div className="space-y-6 animate-float relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-white/80 mb-2">
                <MapPin size={18} />
                <span className="text-lg uppercase tracking-widest">{weather.name}</span>
              </div>
              <h2 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                {Math.round(weather.main.temp)}º
              </h2>
              <p className="text-xl capitalize mt-2 font-medium text-white/90">
                {weather.weather[0].description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col items-center gap-2">
                <Droplets size={24} className="text-cyan-300" />
                <span className="text-sm text-white/60">Humidity</span>
                <span className="font-bold text-lg">{weather.main.humidity} °</span>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col items-center gap-2">
                <Wind size={24} className="text-emerald-300" />
                <span className="text-sm text-white/60">Wind</span>
                <span className="font-bold text-lg">{weather.wind.speed} km/h</span>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col items-center gap-2">
                <ThermometerSun size={24} className="text-orange-300" />
                <span className="text-sm text-white/60">thermal sensation</span>
                <span className="font-bold text-lg">{Math.round(weather.main.feels_like)}°</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
export default App
