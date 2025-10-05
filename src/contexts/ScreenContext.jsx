import { useEffect, useState, createContext } from "react";

const ScreenContext = createContext({
  isMobile: window.innerWidth < 768,
});

function ScreenProvider({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
}

export { ScreenContext, ScreenProvider };
