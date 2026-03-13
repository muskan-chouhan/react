import { useState } from "react"
import ProductList from "./ProductList"
import products from "./data"

function App() {

  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(products)
function handleSearch (){
   const value = e.target.value
    setSearch(value)   
    
    //filter
    products.filter((item)=>{
    return item.includes(value)
    setFiltered(filteredProducts)
})
}
       

   
  return (
    <>
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={handleSearch}
      />

      <ProductList items={filtered} search={search} />
    </>
  )

}

export default App;




