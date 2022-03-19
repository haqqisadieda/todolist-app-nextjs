export default function List({ text, completed, todo, todos, setTodos }) {
    const deleteHandler = (e) => {
        e.preventDefault();
        const divTodo = e.currentTarget.parentElement;
        console.log(divTodo);
        divTodo.classList.add('fall');
        divTodo.addEventListener('transitionend', () => {
            setTodos(todos.filter((el) => el.id !== todo.id));
        });
    };

    const completeHandler = (e) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div
            className={`todo flex justify-between items-center m-2 text-xl bg-white transition-all 0.5s ease-out ${
                todo.completed ? 'completed' : ''
            }`}>
            <li className='todo-item flex-1 px-4'>{text}</li>
            <button
                onClick={completeHandler}
                className='completed-btn bg-green-400 p-4 cursor-pointer text-base text-white'>
                <i className='fas fa-check' />
            </button>
            <button
                onClick={deleteHandler.bind(this)}
                className='trash-btn bg-orange-400 p-4 cursor-pointer text-base text-white'>
                <i className='fas fa-trash' />
            </button>
        </div>
    );
}
