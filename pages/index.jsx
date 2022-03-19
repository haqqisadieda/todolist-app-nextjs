/* eslint-disable indent */
import Form from '@/components/Form';
import Header from '@/components/Header';
import Todo from '@/components/Todo';

import { useState, useEffect } from 'react';

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodo();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(
                    todos.filter((todo) => todo.completed === true)
                );
                break;
            case 'uncompleted':
                setFilteredTodos(
                    todos.filter((todo) => todo.completed === false)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodo = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        }
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
    };

    return (
        <div>
            <Header />
            <header className='flex justify-center items-center'>
                <h1 className='text-3xl text-white font-semibold tracking-wide'>
                    MyTodoList
                </h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <Todo
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}
