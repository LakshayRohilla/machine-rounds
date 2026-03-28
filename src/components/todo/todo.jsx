import { useState } from 'react';

const Todo = () => {
     const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addTask = () => {
        if (input.trim()) {
            if (editIndex !== null) {
                // Edit the existing task
                setTasks(tasks.map((task, index) => (index === editIndex ? input : task)));
                setEditIndex(null);
            } else {
                // Add a new task
                setTasks([...tasks, input]);
            }
            setInput('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const editTask = (index) => {
        setInput(tasks[index]);
        setEditIndex(index);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
            <h1>To-Do App</h1>
            <input
                type="text"
                value={input}
                placeholder="Enter a task"
                onChange={(e) => setInput(e.target.value)}
                style={{ padding: '5px', width: '200px' }}
            />
            <button onClick={addTask} style={{ padding: '5px 10px', marginLeft: '5px' }}>
                {editIndex !== null ? 'Update' : 'Add'}
            </button>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        {task}{' '}
                        <button
                            onClick={() => editTask(index)}
                            style={{
                                padding: '2px 5px',
                                backgroundColor: 'blue',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                marginRight: '5px',
                            }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTask(index)}
                            style={{
                                padding: '2px 5px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;