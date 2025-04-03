import { useRef, useState } from "react";
import { v1 } from "uuid";
import { ToDo } from "../types";

interface Props {
  setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

function ToDoInput(props: Props) {
  const { setToDoList } = props;
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="todo-input-row"
      onSubmit={(e) => {
        e.preventDefault();

        setToDoList((toDoList) => [
          ...toDoList,
          { name: input, isFinished: false, id: v1() },
        ]);
        setInput("");
        inputRef.current?.focus();
      }}
    >
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        ref={inputRef}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default ToDoInput;
