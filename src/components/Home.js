import { useState } from "react";
import DisplayTodo from "./DisplayTodo";

const Home = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodo] = useState([
    { id: 0, name: "Learn react" },
    { id: 1, name: "Learn tf" },
    { id: 2, name: "Learn torch" },
  ]);
  const handleClickBtn = (job, task, taskList) => {
    setTask("");
    return job([...taskList, { id: todoList.length, name: task }]);
  };
  const handleDeleteClick = (job, id, taskList) => {
    return job(taskList.filter((item) => item.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        type="submit"
        value={task}
        onClick={(event) => {
          if (task !== "")
            handleClickBtn(setTodo, event.target.value, todoList);
        }}
      >
        Submit
      </button>
      <br />
      <p>Hello {task}</p>
      <DisplayTodo
        todoList={todoList}
        setTodo={setTodo}
        delTodo={handleDeleteClick}
      />
    </div>
  );
};
export default Home;
