import styled from 'styled-components';
const FormCard = styled.div`
      border:2px solid black;
      width:300px;
      padding:20px;
      border-radius:5px;
`
const TaskForm = () => {
    return (
        <FormCard>
            <form>
                <input type='text' placeholder='Enter you Task'></input>
                <br /><br />
                <select>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <br /><br />
                <button>Add Task</button>
            </form>
        </FormCard>
    )
}

export default TaskForm;