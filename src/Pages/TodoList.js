import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const TodoList = () => {
    const [data, setData] = useState('');
    const [result, setResult] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        
        if (data.trim() === '') {
            // If no data is entered, show an alert
            setShowAlert(true);
        } else {
            const newTask = { id: new Date().getTime().toString(), list: data };
            setResult([...result, newTask]);
            setData(''); // Clear the input field
            // Hide the alert if it was previously shown
            setShowAlert(false);
        }
    };

    const handleDelete = (taskId) => {
        // Filter out the task with the specified taskId
        const updatedResult = result.filter((task) => task.id !== taskId);
        setResult(updatedResult);
    };

    return (
        <>
            <div className="relative">
                <div className="todo-wrap">
                    <div className="todo-input">
                        <input
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            type="text"
                            placeholder='Add task...'
                        />
                        <button className="position-btn" onClick={handleClick}>Add Task</button>
                    </div>
 
                    <div className="todo-content">
                        <ul>
                            {result.map((task, index) => (
                                <li key={task.id}>
                                    {task.list}
                                    <div className="user">
                                        <div>
                                            <FaEdit color='#28094d' />
                                        </div>
                                        <div>
                                            <RiDeleteBin5Fill color='#28094d' onClick={() => handleDelete(task.id)} />
                                        </div>
                                    </div>
                                </li>         
                            ))}
                        </ul>
                    </div>
                </div>
                {showAlert && <div className='error-wrap'><h5  className="error-msg">
                Please enter some data.
                </h5></div>}
            </div>
           
        </>
    );
};

export default TodoList;
