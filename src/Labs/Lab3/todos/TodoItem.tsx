const TodoItem = ({
  todo = { done: true, title: "buy milk", status: "COMPLETE" },
}) => {
  return (
    <li>
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title}({todo.status})
    </li>
  );
};

export default TodoItem;
