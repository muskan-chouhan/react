import { useState } from "react"

function App() {
    const product = ["vivo",'oppo','realme','vivo1']
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
        <h1>{filter}</h1>
        </>  

    )
}

export default App;


