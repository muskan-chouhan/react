import { useState } from "react";

function Skills(){
         const [skills, setSkill] =useState([])
         const handelSkills = (e) => {
            
                if(event.target.checked){
                   setSkill( [...skills,event.target.value])
                }else{
                    setSkill([...skills.filter((item)=>item != event.target.value) ])
                }
                
         }
    return(
        <>
        <h3>Select Your Skills</h3>
        <input type="checkbox" onChange={handelSkills} id="js" value={"js"}/>
        <label htmlFor="js">JS</label><br></br>
        <input type="checkbox" id="react" value={"react"} onChange={handelSkills}/>
        <label htmlFor="react">react</label><br></br>
        <input type="checkbox" id="php" value={"php"} onChange={handelSkills}/>
        <label htmlFor="php">PHP</label><br></br>
        <input type="checkbox" id="node" value={"node"} onChange={handelSkills}/>
        <label htmlFor="node">Node</label><br></br>
        <h1>{skills.toString()}</h1>
        </>
    )
      
}

export default Skills;