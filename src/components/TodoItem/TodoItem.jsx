export default function TodoItem({ todo }) {
  return (
    <li className="todo-row">
      <span className="todo-check" aria-hidden="true" />
      <span>{todo}</span>
    </li>
  );
}
