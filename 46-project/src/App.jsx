import { useState } from "react"
import ProductList from "./ProductList"
import products from "./data"
import { useTransition } from "react"

function App() {

  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(products)
  const [isPending, startTransition] = useTransition()
  
  function handleSearch (e){
   const value = e.target.value
    setSearch(value)   
    
    //filter
    const filteredProducts = products.filter((item)=>{
    return item.includes(value)   
})
setFiltered(filteredProducts);
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

      <ProductList items={filtered} />
    </>
  )

}

export default App;




