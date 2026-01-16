import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div>
      <h1
        style={{
          border: '2px solid white',
          width: '150px',
          padding: '10px',
          background: 'black',
          color: color,
          margin: '10px',
          textAlign: 'center'
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default Clock;
