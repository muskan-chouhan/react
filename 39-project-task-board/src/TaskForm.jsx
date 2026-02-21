import styled from 'styled-components';
const FormCard = styled.div`
      border:2px solid black;
      width:300px;
      padding:20px;
      border-radius:5px;
      background:white;
      box-shadow:0 4px 12px rgba(0,0,0,0,0.8);
      display :flex;
      flex-direction:column;
      gap:15px;
      
`
const TaskForm = () => {
    return (
        <FormCard>
            <form>
                <input type='text' placeholder='Enter you Task'></input>
                <select>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <button>Add Task</button>
            </form>
        </FormCard>
    )
}

export default TaskForm;