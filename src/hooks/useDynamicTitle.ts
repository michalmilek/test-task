import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = () => {
  const location = useLocation();

  const parts = location.pathname.split("/").filter((part) => part !== "");

  useEffect(() => {
    if (parts.length === 0) {
      document.title = "Github - Resume Checker";
    } else if (parts.length >= 2) {
      const username = parts[parts.length - 1];

      document.title = `Resume check - ${username}`;
    }
  }, [location, parts]);
};

export default useDynamicTitle;
