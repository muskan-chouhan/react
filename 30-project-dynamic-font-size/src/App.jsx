import { useState } from "react";

function App() {
  const [text, setText] = useState("Small");

  return (
    <>
      <select value={text} onChange={(e) => setText(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <h1
        style={{
          fontSize:
            text === "Large"
              ? "24px"
              : text === "Medium"
              ? "16px"
              : "12px",
        }}
      >
        muskan
      </h1>
    </>
  );
}

export default App;
