import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const lightmode = () => {
    setThemeMode("light");
  };
  const darkmode = () => {
    setThemeMode("dark");
  };

  //Actual change in ui

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ ThemeMode, lightmode, darkmode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn></ThemeBtn>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
