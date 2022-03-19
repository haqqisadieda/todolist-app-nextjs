import { useState } from 'react';

export default function Form({
    todos,
    setTodos,
    inputText,
    setInputText,
    setStatus,
}) {
    const [error, setError] = useState('');

    const inputTextHandler = (e) => {
        e.preventDefault();
        setInputText(e.currentTarget.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText === '') {
            setError('Silahkan isi Form untuk menambahkan List!');
        } else {
            setError('');
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() * 1000 },
            ]);
            setInputText('');
        }
    };

    const statusHandler = (e) => {
        e.preventDefault();
        setStatus(e.currentTarget.value);
    };

    return (
        <>
            <div className='flex justify-center items-center'>
                <p className='text-white font-light tracking-wide'>{error}</p>
            </div>
            <div className='flex justify-center items-center'>
                <form className='flex justify-end items-center m-5'>
                    <input
                        type='text'
                        onChange={inputTextHandler.bind(this)}
                        value={inputText}
                        className='todo-input p-2 text-2xl bg-white'
                    />
                    <button
                        type='submit'
                        onClick={submitHandler.bind(this)}
                        className='todo-button p-2 text-2xl text-orange-400 hover:text-white bg-white hover:bg-orange-400 cursor-pointer transition-all 0.3s ease-in'>
                        <i className='fas fa-plus-square'></i>
                    </button>
                </form>
                <div className='select m-5'>
                    <select
                        name='todos'
                        onChange={statusHandler.bind(this)}
                        className='filter-todo appearance-none outline-0  border-none overflow-hidden text-orange-400 w-40 cursor-pointer p-4'>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>
            </div>
        </>
    );
}
