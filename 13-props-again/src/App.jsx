import { useState } from 'react'
import User from './components/user'
import Company from './components/company'
import Student from './components/student'

function App() {
//  let UserName = "Dynamic Data"
//  let age = 24;
//  let email = "example@gmail.com"

const usersObject = {
  name:"muskan chouhan",
  age:24,
  email:"example@gamil.com"
}

const usersObject2 = {
  name:"riya chouhan",
  age:24,
  email:"example@gamil.com"
}
const usersObject3 = {
  name:"neha chouhan",
  age:24,
  email:"example@gamil.com"
}

let companyArr = ['Goggle','Microsoft','Amazon','TCS']

const [student,setStudent] =useState()

  return (
    <>
    {/* <User name={UserName} age = {22} email = {email} /> */}
    <h1>Props in react JS</h1> 
    { student&&<Student name={student}/>}
    <button onClick={()=>setStudent('ram')}>Update Student Name</button>



    <Company name={companyArr[0]}/>
    <Company name={companyArr[1]}/>
    <Company name={companyArr[2]}/>

    <User user = {usersObject}/>
    <User user = {usersObject2}/>
    <User user = {usersObject3}/>
    </>
  )
}

export default App
