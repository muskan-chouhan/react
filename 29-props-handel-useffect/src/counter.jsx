import { useEffect } from "react";

const Counter = ({ counter, data }) => {
  function getCounter(){
    console.log('call counter only');
    
  }
useEffect(()=>{
      getCounter();
},[])

  function getData(){
    console.log('call data only');
    
  }
  useEffect(()=>{
     getData();
},[data])

    return (

        <>
        <h2>counter value : {counter}</h2>
        <h2>data value : {data}</h2>
        </>
    )

}
export default Counter;