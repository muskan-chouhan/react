const TaskForm = () => {
    return (
        <div>
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
        </div>
    )
}

export default TaskForm;