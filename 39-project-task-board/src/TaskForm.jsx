import { useState } from 'react';
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  gap: 12px;
`;

const Input = styled.input`
  flex: 2;
  padding: 11px;
  border-radius: 6px;
  border: 1px solid ${({ hasError }) => hasError ? "#e63f3f" : "#d1d5db"};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #6264f4;
  }  
`;

const Select = styled.select`
  flex: 1;
  padding: 11px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`;

const Button = styled.button`
  padding: 11px 18px;
  border-radius: 6px;
  border: none;
  background: #787afc;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #5149eb;
  }
`;

const Error = styled.span`
  color: #dc3939;
  font-size: 12px;
  margin-top: 6px;
  display: block;
`;

const TaskForm = ({ addGetFun }) => {

  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();

    if (trimmed === "") {
      setErr("Task is required");
      return;
    }

    setErr("");
    addGetFun(trimmed, priority);
    setTask("");
    setPriority("");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter task..."
          value={task}
          hasError={error}
          onChange={(e) => {
            setTask(e.target.value);
            if (error) setErr("");
          }}
        />

        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Select>

        <Button type="submit">Add</Button>
      </Form>

      {error && <Error>{error}</Error>}
    </>
  )
}

export default TaskForm   



      



