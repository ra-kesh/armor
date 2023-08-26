import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useRouteChangeEffect = (setRouteChanged) => {
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setRouteChanged(true);

      const timeout = setTimeout(() => {
        setRouteChanged(false);
      }, 1000);

      return () => {
        isMounted = false;
        clearTimeout(timeout);
      };
    }
  }, [location, setRouteChanged]);
};
