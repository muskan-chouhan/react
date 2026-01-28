import { forwardRef } from "react";
const UserInput =(props,ref)=>{
    return(
        <div>
     <input type='text' ref={ref}></input>
        </div>
    )
}

export default forwardRef(UserInput);