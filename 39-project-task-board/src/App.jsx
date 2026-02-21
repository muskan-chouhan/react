import { useState } from 'react'
import TaskForm from './TaskForm'
import ShowCard from './ShowTaskCard'
import styled from 'styled-components'

export const BoardWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f8;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 40px 20px;
`;

function App() {
  return (
    <>
      <BoardWrapper>
        <Container>
        <h1>Task Priority Board</h1>
        </Container>
      </BoardWrapper>
    </>
  )
}

export default App