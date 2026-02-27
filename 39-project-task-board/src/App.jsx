import TaskForm from './TaskForm'
import ShowCard from './ShowTaskCard'
import styled from 'styled-components'
import { useState } from 'react';

const Page = styled.div`
  min-height: 100vh;
  background: #f3f4f6;
  padding: 50px 20px;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #051c49;
  margin-bottom: 35px;
`;

const FormWrapper = styled.div`
  max-width: 500px;
  margin-bottom: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

function App() {
  const [taskArr, setTaskArr] = useState([])

  const onhandel = (task, priority) => {
    setTaskArr([...taskArr, { task, priority }])
  }

  return (
    <Page>
      <Wrapper>

        <Heading>Porject Task Priority Board</Heading>

        <FormWrapper>
          <TaskForm addGetFun={onhandel} />
        </FormWrapper>

        <Grid>
          {taskArr.map((item, index) => (
            <ShowCard
              key={index}
              task={item.task}
              priority={item.priority}
            />
          ))}
        </Grid>

      </Wrapper>
    </Page>
  )
}

export default App