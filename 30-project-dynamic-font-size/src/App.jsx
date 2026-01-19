import { useState } from "react";
import Text from "./component/text";

function App() {
  const [text, setText] = useState("Small");

  return (
    <>
      <select value={text} onChange={(e) => setText(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

     <Text text = {text}/>
    </>
  );
}

export default App;
