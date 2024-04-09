import './TodoItem.css';
function TodoItem({text, id}) {
    return (
        <article classname='todo-item'>
            {text} {id}
        </article>
    )
}

export default TodoItem;