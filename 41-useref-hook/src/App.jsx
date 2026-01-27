import { useRef } from "react"

function App() {
  const inputRef = useRef(null)
  const href = useRef(null)

  const handelInput = () => {
    inputRef.current.focus()
    inputRef.current.style.color = 'red'
    inputRef.current.placeholder = 'Enter password'
    inputRef.current.value = '124'
  }

  const handeToggle = () => {
    if (inputRef.current.style.display === 'none') {
      inputRef.current.style.display = 'inline'
    } else {
      inputRef.current.style.display = 'none'
    }
  }

  const handelh = () => {
    href.current.style.color = 'green'
  }

  return (
    <>
      <h2>useRef Hook</h2>

      <button onClick={handeToggle}>Toggle</button>

      <input
        type="text"
        placeholder="Enter Name"
        ref={inputRef}
      />

      <button onClick={handelInput}>Click</button>

      <h1 ref={href}>code step by step</h1>
      <button onClick={handelh}>Click</button>
    </>
  )
}

export default App
