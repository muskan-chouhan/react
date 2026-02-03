import { useState } from 'react'
import useCounter from './useCounter'
function Counter1() {
     const [count,increment,decrement] = useCounter()
    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default Counter1;