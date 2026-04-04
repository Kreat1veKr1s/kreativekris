import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Cloud, Sun, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Wind, Thermometer } from "lucide-react";

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

interface VisitorData {
  city: string;
  region: string;
  country: string;
  time: string;
  day: string;
  date: string;
  weather: WeatherData | null;
}

const weatherIcons: Record<string, typeof Sun> = {
  Clear: Sun,
  Clouds: Cloud,
  Rain: CloudRain,
  Drizzle: CloudDrizzle,
  Thunderstorm: CloudLightning,
  Snow: CloudSnow,
  Mist: Wind,
  Fog: Wind,
  Haze: Wind,
};

const VisitorWidget = ({ inline = false }: { inline?: boolean }) => {
  const [data, setData] = useState<VisitorData | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        // Try multiple geolocation providers for reliability
        let geo: any = null;
        try {
          const geoRes = await fetch("https://ipapi.co/json/");
          if (geoRes.ok) geo = await geoRes.json();
        } catch {}

        if (!geo || geo.error) {
          try {
            const geoRes2 = await fetch("https://get.geojs.io/v1/ip/geo.json");
            if (geoRes2.ok) {
              const g = await geoRes2.json();
              geo = { city: g.city, region: g.region, country_name: g.country, latitude: g.latitude, longitude: g.longitude, timezone: g.timezone };
            }
          } catch {}
        }

        if (!geo || (!geo.city && !geo.latitude)) throw new Error("No geo data");

        const city = geo.city || "Your City";
        const region = geo.region || "";
        const country = geo.country_name || "";
        const lat = geo.latitude;
        const lon = geo.longitude;
        const tz = geo.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Get weather via Open-Meteo (no API key needed)
        let weather: WeatherData | null = null;
        try {
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`
          );
          const weatherJson = await weatherRes.json();
          const temp = Math.round(weatherJson.current.temperature_2m);
          const code = weatherJson.current.weather_code;

          // Map WMO codes to descriptions
          const wmoMap: Record<number, string> = {
            0: "Clear", 1: "Clear", 2: "Clouds", 3: "Clouds",
            45: "Fog", 48: "Fog",
            51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
            61: "Rain", 63: "Rain", 65: "Rain",
            71: "Snow", 73: "Snow", 75: "Snow",
            80: "Rain", 81: "Rain", 82: "Rain",
            95: "Thunderstorm", 96: "Thunderstorm", 99: "Thunderstorm",
          };

          weather = {
            temp,
            description: wmoMap[code] || "Clear",
            icon: wmoMap[code] || "Clear",
          };
        } catch {
          // Weather fetch failed, continue without it
        }

        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          weekday: "long",
        });
        const dateFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        setData({
          city,
          region,
          country,
          time: "",
          day: formatter.format(now),
          date: dateFormatter.format(now),
          weather,
        });

        // Update time every second
        const updateTime = () => {
          const t = new Date().toLocaleTimeString("en-US", {
            timeZone: tz,
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
          setCurrentTime(t);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
      } catch {
        // Geolocation failed, use browser defaults
        const now = new Date();
        setData({
          city: "Your Location",
          region: "",
          country: "",
          time: "",
          day: now.toLocaleDateString("en-US", { weekday: "long" }),
          date: now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          weather: null,
        });
        const updateTime = () => {
          setCurrentTime(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
      }
    };

    fetchVisitorData();
  }, []);

  if (!data) return null;

  const WeatherIcon = data.weather ? (weatherIcons[data.weather.icon] || Cloud) : Sun;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={inline ? "inline-flex" : "fixed top-20 right-4 z-40 hidden md:flex"}
      >
        <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{data.city}{data.region ? `, ${data.region}` : ""}</span>
          </div>
          <div className="w-px h-4 bg-border/50" />
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>{data.day}, {currentTime}</span>
          </div>
          {data.weather && (
            <>
              <div className="w-px h-4 bg-border/50" />
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <WeatherIcon className="w-3.5 h-3.5 text-primary" />
                <span>{data.weather.temp}°F · {data.weather.description}</span>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VisitorWidget;
