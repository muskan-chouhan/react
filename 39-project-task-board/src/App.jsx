import TaskForm from './TaskForm'
import ShowCard from './ShowTaskCard'
import styled from 'styled-components'
import { useState } from 'react';


const BoardWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #e4e8f0);
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  text-align: center;   // 👈 add this
  color: #222;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 400px;
  margin: 0 auto;
`;

function App() {

  const [taskArr,setTaskArr] =useState([])
  const onhandel=(getTask,getPriorty)=>{
     setTaskArr([...taskArr,{task:getTask,priority:getPriorty}])
    //console.log(getTask);
    // console.log(getPriorty);

  }
  return (
    <BoardWrapper>
      <Container>
        <Heading>Task Priority Board</Heading>

        <Content>
          <TaskForm addGetFun={onhandel}/>
          {
            taskArr.map((data,index)=>(
              <ShowCard key={index} task={data.task} priority={data.priority}/>
            ))
          }
           
        </Content>

      </Container>
    </BoardWrapper>
  )
}

export default App