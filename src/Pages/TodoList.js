import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const TodoList = () => {
    const [data, setData] = useState('');
    const [result, setResult] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [editTask, setEditTask] = useState(null);

    const handleAddOrEdit = (e, taskId) => {
        e.preventDefault();

        if (data.trim() === '') {
            setShowAlert(true);
            return;
        }

        if (taskId !== null) {
            // If we are editing a task, update it
            const updatedResult = result.map((task) => {
                if (task.id === taskId) {
                    return { id: task.id, list: data };
                }
                return task;
            });
            setResult(updatedResult);
        } else {
            const newTask = { id: new Date().getTime().toString(), list: data };
            setResult([...result, newTask]);
        }

        setData('');
        setShowAlert(false);
        setEditTask(null); // Exit edit mode
    };

    const handleEdit = (taskId, taskContent) => {
        setData(taskContent);
        setEditTask(taskId);
    };

    const handleDelete = (taskId) => {
        const updatedResult = result.filter((task) => task.id !== taskId);
        setResult(updatedResult);
        setShowAlert(false);
        setEditTask(null); // Exit edit mode if deleting the task
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
                            placeholder="Add task..."
                        />
                        <button  className ="position-btn" onClick={(e) => handleAddOrEdit(e, editTask)}>
                            {editTask ? 'Save Task' : 'Add Task'}
                        </button>
                    </div>

                    <div className="todo-content">
                        <ul>
                            {result.map((task) => (
                                <li key={task.id}>
                                    {editTask === task.id ? (
                                        <input
                                            type="text"
                                            value={data}
                                            onChange={(e) => setData(e.target.value)}
                                        />
                                    ) : (
                                        task.list
                                    )}
                                    <div className="user">
                                        {editTask === task.id ? (
                                            {/* <button onClick={(e) => handleAddOrEdit(e, task.id)}>
                                                Save
                                            </button> */}
                                        ) : (
                                            <FaEdit
                                                color="#28094d"
                                                onClick={() => handleEdit(task.id, task.list)}
                                            />
                                        )}
                                        <RiDeleteBin5Fill
                                            color="#28094d"
                                            onClick={() => handleDelete(task.id)}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {showAlert && (
                <div className='error-wrap'>
                    <h5 className="error-msg">
                        Please enter some data.
                    </h5>
                </div>
            )}
        </>
    );
};

export default TodoList;
