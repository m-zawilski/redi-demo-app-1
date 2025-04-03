import { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./types";

function App() {
  const [toDoList, setToDoList] = useState<ToDo[]>([
    { id: v1(), name: "Create the app", isFinished: false },
    { id: v1(), name: "Eat a cookie", isFinished: false },
    { id: v1(), name: "Practice more!", isFinished: false },
  ]);

  return (
    <div className="column">
      <h1 className="title">Todo</h1>
      <ToDoInput setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
