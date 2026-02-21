import styled from 'styled-components'

const FormCard = styled.div`
  width: 350px;
  padding: 24px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`

const Button = styled.button`
  padding: 10px 12px;
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
`

const TaskForm = () => {
  return (
    <FormCard>
      <StyledForm>
        <Input type="text" placeholder="Enter your task" />
        <Select>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <Button>Add Task</Button>
      </StyledForm>
    </FormCard>
  )
}

export default TaskForm