import { useState } from 'react'
import TaskForm from './TaskForm'
import ShowCard from './ShowTaskCard'
import styled from 'styled-components'

const BoardWrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background: #f4f6f8;
  display:flex;
  align-items:center;
`

function App() {
  return (
    <>
      <BoardWrapper>
        <h1>Task Priority Board</h1>
      </BoardWrapper>
    </>
  )
}

export default App