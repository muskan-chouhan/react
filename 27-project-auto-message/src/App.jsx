import { useEffect, useState } from "react";

function App() {
  const messages = ["Hello 👋", "Welcome 😊", "Learn React 🚀"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === messages.length - 1) {
          return 0; // last ke baad wapas first
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>{messages[index]}</h2>
    </>
  );
}

export default App;
