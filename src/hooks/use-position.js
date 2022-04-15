import { useState, useEffect } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("Completed");
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  }, []);

  return { latitude: position.latitude, longitude: position.longitude, status };
};
