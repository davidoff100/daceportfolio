import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return null;
};
