import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../components/todoSlice';

function ToDos() {
    const todos = useSelector(state => state.todos); 
    const dispatch = useDispatch();

    const [editingId, setEditingId] = useState(null);
    const [newText, setNewText] = useState("");

    if (!Array.isArray(todos)) {
        console.error('Expected todos to be an array, but received:', todos);
        return null;
    }

    const handleUpdateTodo = (id, text) => {
        setEditingId(id);
        setNewText(text);
    };

    const handleSaveUpdate = (id) => {
        dispatch(updateTodo({
            id,
            text: newText
        }));
        setEditingId(null);
        setNewText("");
    };

    return (
        <>
            <div style={{margin: '10px', fontSize: '40px'}}>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                    className="text-black bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                <button
                                    onClick={() => handleSaveUpdate(todo.id)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    Save
                                </button>
                            </>
                        ) : (<>
                        <div className='text-white'>{todo.text}</div>
                        
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={() => handleUpdateTodo(todo.id, todo.text)}
                            className="text-white bg-blue-500 border-0 mx-0 py-1 px-1 focus:outline-none hover:bg-blue-600 rounded text-md"
                            style={{marginLeft: '-300px'}}
                        >
                            <img
                                src="../src/assets/edit-icon.png"
                                className="w-10 h-6"
                            />                            
                        </button>
                        </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ToDos;
