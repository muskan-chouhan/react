import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const userData = [
    {
      name: 'henery Poter',
      age: 24,
      email: 'henery@gamil.com',
      id: 6
    },
    {
      name: 'Alex sen',
      age: 22,
      email: 'alex@gamil.com',
      id: 5
    },
    {
      name: 'Sem rim',
      age: 17,
      email: 'sem@gamil.com',
      id: 4
    },
    {
      name: 'John kav',
      age: 25,
      email: 'john@gamil.com',
      id: 3
    },
    {
      name: 'Kim belly',
      age: 27,
      email: 'kim@gamil.com',
      id: 2
    },
    {
      name: 'Dany okwd',
      age: 28,
      email: 'deny@gamil.com',
      id: 1
    }
  ]

  return (

    <div>
      <h1>Loop in JSX with map function</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
            userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>


      <br></br>
      <br></br>
      <br></br>
      <br></br>








      {/* domy data */}
      <table border='1'>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>9</td>
            <td>Anil</td>
            <td>50</td>
            <td>Email@gamil.com</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Anil</td>
            <td>50</td>
            <td>Email@gamil.com</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Anil</td>
            <td>50</td>
            <td>Email@gamil.com</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Anil</td>
            <td>50</td>
            <td>Email@gamil.com</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Anil</td>
            <td>50</td>
            <td>Email@gamil.com</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Anil</td>
            <td>50</td>
            <td>Email@gamil.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
