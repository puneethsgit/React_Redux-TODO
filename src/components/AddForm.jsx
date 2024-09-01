import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br /><br />
        <Button type="submit" variant="outlined">
          Add
        </Button>
      </form>
    </>
  );
}
