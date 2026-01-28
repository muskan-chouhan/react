// import { forwardRef } from "react";
// const UserInput =(props,ref)=>{
//     return(
//         <div>
//      <input type='text' ref={ref}></input>
//         </div>
//     )
// }

// export default forwardRef(UserInput);


const UserInput = (props) =>{

    return(
        <>
        <input type="text" ref={props.ref}>
        </input>
        </>
    )
}
export default UserInput;