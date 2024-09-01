import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markHandler = (id) => {
    dispatch(markAsDone(id));
  };

  const todos = useSelector((state) => state.todos);
  //console.log(todos);

  return (
    <>
      <h2>Todos List - Redux</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
              &nbsp;
            </span>
            &nbsp; &nbsp; &nbsp;
            {/* <button onClick={() => deleteHandler(todo.id)}>Delete</button> */}
            {/* id can't be passed directly so we are using arrow function */}
  
            <button
              onClick={() => markHandler(todo.id)}
            >
              Mark As Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
