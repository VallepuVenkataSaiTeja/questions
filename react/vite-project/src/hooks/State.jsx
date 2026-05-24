import { useState } from "react";

function State(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function addTask(){
        if(task.trim() === "") return;

        setTasks(prev => [...prev, task])
        setTask('')
    }

    function editTask(id){
        const newTask = prompt('enter a new task', tasks[id]);

        if(!newTask || newTask.trim() === '') return;

        setTasks(prev => prev.map(( t,index) => index === id ? newTask : t))

    }

    function deleteTask(indexToDelete){
        setTasks(prev => prev.filter((_,index) => index !== indexToDelete) )
    }

    return (
        <div>
            <h1>useState</h1>
            <p>Input: {task}</p>

            <input type="text" value={task} onChange={ e => setTask(e.target.value) } />

            <button onClick={addTask}>Add task</button>

            <ul>{tasks.map((task, index) =>(
                <li key={index}>{task}

                <button onClick={() => editTask(index)}>Edit</button>

                <button onClick={() => deleteTask(index)}>Delete</button>

                </li>
            ))}</ul>
        </div>
    )
}
export default State;