import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState('');


  useEffect(()=>{
      repeat();  
  },[])
  function repeat() {
    setMsg("hello");
  }
  
  return (
    <>
      <h2>{msg}</h2>
    </>
  );
}

export default App;
