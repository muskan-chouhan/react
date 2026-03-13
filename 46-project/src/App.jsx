import { useState, useTransition } from "react"
import ProductList from "./ProductList"
import products from "./data"

function App() {

  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(products)
  const [isPending, startTransition] = useTransition()

  function handleSearch(e) {

    const value = e.target.value
    setSearch(value)

    startTransition(() => {

      const filteredProducts = products.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )

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

      {isPending && <p>Loading...</p>}

      <ProductList items={filtered} />
    </>
  )

}

export default App