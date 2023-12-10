const DisplayTodo = ({ todoList, setTodo, delTodo }) => {
  return (
    <div>
      <div>Todo List:</div>
      {todoList.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => delTodo(setTodo, item.id, todoList)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
