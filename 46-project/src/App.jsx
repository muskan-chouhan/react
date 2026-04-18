import { useState } from "react"

function App() {
    const product = ["vivo",'oppo','realme','samsung','motorola','readme']
    const [filter,setFilter] = useState([])

    function handleSearch(e){
        const value = e.target.value
        
        const filteredProducts = product.filter((item)=>{
           return item.includes(value)
        })
        setFilter(filteredProducts)
            
    }   
    return (
        <>
        <h1>Product Search</h1>
        <input
        placeholder="Search product..."
        onChange={handleSearch}
        />
<ul>
  {filter.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

        </>  

    )
}

export default App;




 





