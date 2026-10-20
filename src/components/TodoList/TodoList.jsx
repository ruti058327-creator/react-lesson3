import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem.jsx";

const initialTodos = [
  "לסיים את תרגיל React",
  "לקרוא פרק בספר",
  "לצאת להליכה",
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedTodo = newTodo.trim();

    if (!trimmedTodo) {
      setFeedback("יש להזין משימה לפני ההוספה.");
      return;
    }

    const normalizedTodo = trimmedTodo.toLocaleLowerCase("he");
    const alreadyExists = todos.some(
      (todo) => todo.toLocaleLowerCase("he") === normalizedTodo,
    );

    if (alreadyExists) {
      setFeedback("המשימה כבר קיימת ברשימה.");
      return;
    }

    setTodos((currentTodos) => [...currentTodos, trimmedTodo]);
    setNewTodo("");
    setFeedback("");
  }

  return (
    <section className="todo-card" aria-labelledby="todo-title">
      <p className="eyebrow">מתקדמים צעד אחר צעד</p>
      <h1 id="todo-title">רשימת המשימות שלי</h1>
      <p className="intro">כל הדברים שחשוב לזכור, במקום אחד.</p>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="new-todo">
          משימה חדשה
        </label>
        <input
          id="new-todo"
          type="text"
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
            setFeedback("");
          }}
          placeholder="מה תרצו לעשות?"
        />
        <button type="submit">אישור</button>
      </form>
      <p className="form-feedback" role="status" aria-live="polite">
        {feedback}
      </p>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo} todo={todo} />
        ))}
      </ul>
      <p className="task-count">{todos.length} משימות להיום</p>
    </section>
  );
}
