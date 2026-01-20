import { useEffect } from "react";

const Counter = ({ count, data }) => {

  useEffect(() => {
    console.log("mounting phase only");
  }, []);


  useEffect(() => {
    console.log("updating phase only");
  }, [count]);


    useEffect(() => {
  return () =>{
      console.log("unmounting phase only");
  }
  }, []);
  return (
    <>
      <h1>Counter Value {count}</h1>
      <h1>Data Value {data}</h1>
    </>
  );
};

export default Counter;
