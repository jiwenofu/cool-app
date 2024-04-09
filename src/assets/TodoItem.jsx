import './TodoItem.css';
function TodoItem({text, id}) {
    return (
        <article className='todo-item'>
            {text} {id}
        </article>
    )
}

export default TodoItem;