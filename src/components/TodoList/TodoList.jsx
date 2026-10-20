import TodoItem from "../TodoItem/TodoItem.jsx";

const initialTodos = [
  "לסיים את תרגיל React",
  "לקרוא פרק בספר",
  "לצאת להליכה",
];

export default function TodoList() {
  return (
    <section className="todo-card" aria-labelledby="todo-title">
      <p className="eyebrow">מתקדמים צעד אחר צעד</p>
      <h1 id="todo-title">רשימת המשימות שלי</h1>
      <p className="intro">כל הדברים שחשוב לזכור, במקום אחד.</p>
      <ul className="todo-list">
        {initialTodos.map((todo) => (
          <TodoItem key={todo} todo={todo} />
        ))}
      </ul>
      <p className="task-count">{initialTodos.length} משימות להיום</p>
    </section>
  );
}
