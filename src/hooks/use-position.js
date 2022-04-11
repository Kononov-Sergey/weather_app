import { useState, useEffect } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ latitude, longitude }) => {
    setPosition({ latitude, longitude });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Geolocation is not supported by the browser");
      return;
    }

    watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
