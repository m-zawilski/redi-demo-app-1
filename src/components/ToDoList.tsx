import { ToDo } from "../types";
import ToDoListItem from "./ToDoListItem";

interface Props {
  toDoList: ToDo[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList = ({ toDoList, setToDoList }: Props) => {
  const toggleToDo = (id: string) => {
    setToDoList(
      toDoList.map((toDo) => {
        if (toDo.id === id) {
          return {
            ...toDo,
            isFinished: !toDo.isFinished,
          };
        } else {
          return toDo;
        }
      })
    );
  };

  const deleteToDo = (id: string) => {
    setToDoList(
      toDoList.filter((toDo) => {
        if (toDo.id === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  return (
    <ul className="todo-list">
      {toDoList.map((toDo) => (
        <ToDoListItem
          key={toDo.id}
          toDo={toDo}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ))}
      <p className="todo-list-information">You have {toDoList.length} todos!</p>
    </ul>
  );
};

export default ToDoList;
