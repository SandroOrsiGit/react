import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const listStyles = {
    display: "grid",
    gap: 15,
  };

  const todos = useSelector((state) => state);

  if (!todos.length) {
    return <p>No chores yet.</p>;
  }

  return (
    <div style={listStyles}>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
}
