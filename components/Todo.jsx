import List from './List';

export default function Todo({ todos, setTodos, filteredTodos }) {
    return (
        <div className='todo-container flex justify-center items-center'>
            <ul className='todo-list list-none w-3/12'>
                {filteredTodos.map((todo) => (
                    <List
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    );
}
