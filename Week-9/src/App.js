import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([
    { name: "Todo1", done: false },
    { name: "Todo2", done: false },
    { name: "Todo3", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const markdone = (index) => {
    return () => {
      console.log(index);
      const temp = [...todo];
      temp[index].done = true;
      setTodo(temp);
    };
  };

  const textareaChange = (props) => {
    setNewTask(props.target.value);
  };

  const saveNewTask = () => {
    const temp = [...todo];
    temp.push({ name: newTask, done: false });
    setTodo(temp);
    setNewTask("");
  };

  return (
    <div className="App">
      <div>
        <h2>Add todo</h2>
        <div>
          <textarea value={newTask} onChange={textareaChange}></textarea>
        </div>
        <button
          className="saveButton"
          disabled={!newTask}
          onClick={saveNewTask}
        >
          Save
        </button>
      </div>
      <table>
        <tr>
          <th>Task name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {todo.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.done ? "Done" : "In progress"}</td>
            <td>
              {!item.done ? (
                <button onClick={markdone(index)}>Mark done</button>
              ) : (
                ""
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
