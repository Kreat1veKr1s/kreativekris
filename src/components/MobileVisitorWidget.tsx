import { useState, useEffect } from "react";
import { MapPin, Cloud, Sun, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Wind } from "lucide-react";

const weatherIcons: Record<string, typeof Sun> = {
  Clear: Sun, Clouds: Cloud, Rain: CloudRain, Drizzle: CloudDrizzle,
  Thunderstorm: CloudLightning, Snow: CloudSnow, Mist: Wind, Fog: Wind, Haze: Wind,
};

const MobileVisitorWidget = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<{ temp: number; desc: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const geoRes = await fetch("https://ipapi.co/json/");
        const geo = await geoRes.json();
        setCity(geo.city || "Your City");

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`
        );
        const w = await weatherRes.json();
        const wmoMap: Record<number, string> = {
          0: "Clear", 1: "Clear", 2: "Clouds", 3: "Clouds",
          45: "Fog", 48: "Fog", 51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
          61: "Rain", 63: "Rain", 65: "Rain", 71: "Snow", 73: "Snow", 75: "Snow",
          80: "Rain", 81: "Rain", 82: "Rain", 95: "Thunderstorm", 96: "Thunderstorm", 99: "Thunderstorm",
        };
        setWeather({ temp: Math.round(w.current.temperature_2m), desc: wmoMap[w.current.weather_code] || "Clear" });
      } catch {
        // Silent fail
      }
    };
    fetchData();
  }, []);

  if (!city) return null;

  const WeatherIcon = weather ? (weatherIcons[weather.desc] || Cloud) : null;

  return (
    <div className="md:hidden flex items-center justify-center gap-2 text-xs text-muted-foreground py-1">
      <MapPin className="w-3 h-3 text-primary" />
      <span>{city}</span>
      {weather && WeatherIcon && (
        <>
          <span>·</span>
          <WeatherIcon className="w-3 h-3 text-primary" />
          <span>{weather.temp}°F</span>
        </>
      )}
    </div>
  );
};

export default MobileVisitorWidget;
