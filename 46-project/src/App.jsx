import { useState } from "react"

function App() {
    const product = ["vivo",'oppo','realme','voivo1']
    const [search, setSearch] = useState("")
    function handleSearch(e){
        const value = e.target.value
        setSearch(value)
        const filteredProducts = product.filter((item)=>{
           return item.includes(value)
        })
            
    }   
    return (
        <>
        <h1>Product Search</h1>
        <input
        placeholder="Search product..."
        onChange={handleSearch}
        />
        {/* <h1>{search}</h1> */}
        </>  

    )
}

export default App;


