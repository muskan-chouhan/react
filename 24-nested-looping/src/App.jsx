import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import College from './component/college'

function App() {

const collegeData = [
  {
    name: "IIT Delhi",
    city: "Delhi",
    website: "https://iitd.ac.in",
    students: [
      {
        name: "Peter Atry",
        age: 23,
        email: "peter@gmail.com",
      },
      {
        name: "Aman Verma",
        age: 21,
        email: "aman@gmail.com",
      },
      {
        name: "Rohit Sharma",
        age: 22,
        email: "rohit@gmail.com",
      },
    ],
  },

  {
    name: "IIT Bombay",
    city: "Mumbai",
    website: "https://iitb.ac.in",
    students: [
      {
        name: "Neha Singh",
        age: 24,
        email: "neha@gmail.com",
      },
      {
        name: "Kunal Mehta",
        age: 23,
        email: "kunal@gmail.com",
      },
      {
        name: "Pooja Jain",
        age: 22,
        email: "pooja@gmail.com",
      },
    ],
  },

  {
    name: "NIT Trichy",
    city: "Trichy",
    website: "https://nitt.edu",
    students: [
      {
        name: "Arjun Rao",
        age: 21,
        email: "arjun@gmail.com",
      },
      {
        name: "Sneha Iyer",
        age: 22,
        email: "sneha@gmail.com",
      },
      {
        name: "Vikram Das",
        age: 23,
        email: "vikram@gmail.com",
      },
    ],
  },

  {
    name: "Delhi University",
    city: "Delhi",
    website: "https://du.ac.in",
    students: [
      {
        name: "Riya Kapoor",
        age: 20,
        email: "riya@gmail.com",
      },
      {
        name: "Mohit Aggarwal",
        age: 21,
        email: "mohit@gmail.com",
      },
      {
        name: "Anjali Sharma",
        age: 22,
        email: "anjali@gmail.com",
      },
    ],
  },

  {
    name: "BITS Pilani",
    city: "Pilani",
    website: "https://bits-pilani.ac.in",
    students: [
      {
        name: "Sahil Khan",
        age: 23,
        email: "sahil@gmail.com",
      },
      {
        name: "Nisha Gupta",
        age: 22,
        email: "nisha@gmail.com",
      },
      {
        name: "Rahul Malhotra",
        age: 24,
        email: "rahul@gmail.com",
      },
    ],
  },
];


  return (
    <>
    <h1>Nested Looping with component</h1>
     {
      collegeData.map((college,index)=>{
       return (
         <div key={index}>
         <College college ={college}/>
         </div>
       )     

      })
     }  
   
    </>
  )
}

export default App
