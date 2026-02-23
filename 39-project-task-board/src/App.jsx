import TaskForm from './TaskForm'
import ShowCard from './ShowTaskCard'
import styled from 'styled-components'

const BoardWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f8;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 40px 20px;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #222;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

function App() {
  return (
    <BoardWrapper>
      <Container>
        <Heading>Task Priority Board</Heading>

        <Content>
          <TaskForm />
          <ShowCard />
        </Content>

      </Container>
    </BoardWrapper>
  )
}

export default App