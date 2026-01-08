import { useState } from "react";
import Product from "./components/product";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 0,
      isFree: true,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Gadgets",
      price: 1999,
      isFree: false,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      category: "Accessories",
      price: 999,
      isFree: false,
      image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400"
    },
    {
      id: 4,
      name: "Online E-book",
      category: "Education",
      price: 0,
      isFree: true,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400"
    },
  {
    id: 5,
    name: "UI Design Kit",
    category: "Design",
    price: 0,
    isFree: true,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400"
  },
  {
    id: 6,
    name: "Fitness Tracker",
    category: "Health",
    price: 2499,
    isFree: false,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400"
  },

  ];

  return (
    <div className="parent">
       <h1 className="main">Products</h1>
{products.map((item) => (
  <div key={item.id}>
    <Product
      name={item.name}
      category={item.category}
      price={item.price}
      image={item.image}
      isFree={item.isFree}
    />
  </div>
))}

    </div>
  );
}

export default App;
