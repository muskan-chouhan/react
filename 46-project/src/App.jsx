import { useState } from "react"

function App() {
  const product = ["vivo", 'oppo', 'realme', 'samsung', 'vivo1', 'oppo1','motorola']
  const [filter, setFilter] = useState(product)

  function handleSearch(e) {
    const value = e.target.value.toUpperCase().trim()  
    const filteredProducts = product.filter((item) => {
      return item.toUpperCase().includes(value)
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










