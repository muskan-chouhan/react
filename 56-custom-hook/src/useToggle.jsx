import { useState } from "react"

const useToggle =(defaultValue)=>{
const [value,setValue]=useState(defaultValue);
 function toggleValue(val){

    if(typeof value != 'boolean'){
            setValue(!value)
    }else{
       setValue(value)
    }
 }
 return [value,toggleValue]

}
export default useToggle;