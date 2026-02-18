import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const generateSessionId = () => {
  const stored = sessionStorage.getItem("session_id");
  if (stored) return stored;
  const id = crypto.randomUUID();
  sessionStorage.setItem("session_id", id);
  return id;
};

const getDeviceType = () => {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
};

export const usePageTracking = () => {
  useEffect(() => {
    const track = async () => {
      try {
        let city = "", region = "", country = "";
        try {
          const geo = await fetch("https://ipapi.co/json/");
          const data = await geo.json();
          city = data.city || "";
          region = data.region || "";
          country = data.country_name || "";
        } catch {
          // Geo failed, continue without
        }

        await supabase.from("page_views").insert({
          page_path: window.location.pathname + window.location.hash,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          city,
          region,
          country,
          device_type: getDeviceType(),
          session_id: generateSessionId(),
        });
      } catch {
        // Silent fail - analytics should never break the app
      }
    };

    track();
  }, []);
};
