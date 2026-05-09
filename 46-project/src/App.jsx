import { useState, useTransition } from "react"

function App() {
  const product = ["vivo", 'oppo', 'realme', 'samsung', 'vivo1','oppo1'
  const [filter, setFilter] = useState(product)
  const [isPending, startTransition] = useTransition()

  function handleSearch(e) {
    const value = e.target.value.toUpperCase().trim()

    startTransition(() => {
      const filteredProducts = product.filter((item) => {
        return item.toUpperCase().includes(value)
      })
      setFilter(filteredProducts)
    })
  }

  return (
    <>
      <h1>Product Search</h1>

      <input
        placeholder="Search product..."
        onChange={handleSearch}
      />

      {/* Loading UI */}
      {isPending && <p>Loading...</p>}
 
      <ul>
        {filter.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
 




