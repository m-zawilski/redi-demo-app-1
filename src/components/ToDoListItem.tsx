import { FaTrash } from "react-icons/fa";
import { ToDo } from "../types";

interface Props {
  toDo: ToDo;
  toggleToDo: (id: string) => void;
  deleteToDo: (id: string) => void;
}

const ToDoListItem = ({ toDo, toggleToDo, deleteToDo }: Props) => {
  return (
    <li className="todo-list-item">
      <input
        type="checkbox"
        checked={toDo.isFinished}
        onChange={() => {
          toggleToDo(toDo.id);
        }}
      />
      <span className="todo-list-item-name">{toDo.name}</span>
      <button
        onClick={() => {
          deleteToDo(toDo.id);
        }}
        className="todo-list-item-delete"
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default ToDoListItem;
