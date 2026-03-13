import { useState } from "react"
import ProductList from "./ProductList"
import products from "./data"

function App(){

  const [search,setSearch] = useState("")
  const [filtered,setFiltered] = useState(products)


  return(
    <>
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <ProductList items={filtered} search ={search}/>
    </>
  )
  
}

export default App;