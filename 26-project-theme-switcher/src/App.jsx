import { useState } from "react";
import Theme from "./component/theme";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor:
          theme === "light"
            ? "#ffffff"
            : theme === "dark"
            ? "#1e1e1e"
            : "#1e90ff",
        color: theme === "dark" ? "#ffffff" : "#000000",
      }}
    >
      <h2>Theme Switcher App</h2>

      <select onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>

      <Theme theme={theme} />
    </div>
  );
}

export default App;
