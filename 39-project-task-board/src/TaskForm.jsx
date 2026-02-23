import { useState } from 'react';
import styled from 'styled-components'

const FormCard = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: #4f46e5;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #4338ca;
  }
`;


const TaskForm = () => {
  const [task, setTask] = useState('');
  const [priorty, setPriorty] = useState();

  //  console.log(task);

  return (
    <FormCard>
      <StyledForm>
        <Input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <Select 
        onChange={(event) => setPriorty(event.target.value)} 
        value={priorty} >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Select>
        <Button>Add Task</Button>
      </StyledForm>
    </FormCard>
  )
}

export default TaskForm