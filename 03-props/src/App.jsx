import Card from "./components/card"
const App = () => {

  return (
  <div className="parent"> 
       <Card user = 'Aman Sharma' age= {22} img = {'https://images.unsplash.com/photo-1763182198113-a9a8d0fe3144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'}/>
       <Card user = 'Ravi Dubey' age= {24} img = {'https://images.unsplash.com/photo-1593047833652-2ae65f74b22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8'}/>
       <Card user = 'kavita Sharma' age= {24} img = {'https://media.istockphoto.com/id/120215821/photo/lotus-flower.webp?a=1&s=612x612&w=0&k=20&c=OpU0dc03Pjl-gFzuiQMNh55fHA22thLKx3iAJT-z5Ho='}/>
       <Card user = 'Nisha Varma' age= {24} img = {'https://images.unsplash.com/photo-1680924636036-70bb750dc401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMnx8fGVufDB8fHx8fA%3D%3D'}/>
  </div> 

  )
}

export default App

