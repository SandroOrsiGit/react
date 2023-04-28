import { useState } from "react";
import { add } from "./redux/actions";
import { useDispatch } from "react-redux";
import TodoInput from "./TodoInput";

export default function AddTodo() {
  const dispatch = useDispatch();

  function handleSave(input) {
    if (input.length) {
      dispatch(
        add({
          text: input,
          completed: false,
        })
      );
    }
  }

  return (
    <div>
      <TodoInput buttonText="Save" onClick={handleSave} />
    </div>
  );
}
