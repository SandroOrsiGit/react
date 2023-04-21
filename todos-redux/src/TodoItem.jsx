import { toggle, update, remove } from "./redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoInput from "./TodoInput";

export default function TodoItem({ todo }) {
	let todoStyle = {
		backgroundColor: todo.completed ? "lightgreen" : "lightcoral",
	};

	const [editing, setEditing] = useState(false);
	const dispatch = useDispatch();

	function handleEdit(input) {
		dispatch(update(todo, input));
		setEditing(false);
	}

	return (
		<div style={todoStyle}>
			{editing ? (
				<p>
					<TodoInput
						onClick={handleEdit}
						defaultValue={todo.text}
						buttonText="Update"
					/>
				</p>
			) : (
				<p>{todo.text}</p>
			)}

			<div>
				<button onClick={() => dispatch(toggle(todo))}>
					{todo.completed ? "Mark as unfinished" : "Mark as finished"}
				</button>
				<button onClick={() => setEditing(!editing)}>Edit</button>
				<button onClick={() => dispatch(remove(todo))}>Remove</button>
			</div>
		</div>
	);
}
