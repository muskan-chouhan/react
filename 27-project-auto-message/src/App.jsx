import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState('');


  useEffect(()=>{
    setInterval(()=>{
       const array = ["hello" , 'weclcom','leranreact']
      setMsg(array[i])
    },1000)
      
  },[])

 
  
  return (
    <>
      <h2>{msg}</h2>
    </>
  );
}

export default App;
