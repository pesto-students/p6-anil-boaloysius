import "./App.css";
import { useState } from "react";

function AddTask(props) {
  const [tempTask, setTempTask] = useState("");

  const textareaChange = (props) => {
    setTempTask(props.target.value);
  };

  return (
    <div>
      <h2>Add todo</h2>
      <div>
        <textarea value={tempTask} onChange={textareaChange}></textarea>
      </div>
      <button
        className="saveButton"
        disabled={!tempTask}
        onClick={() => {
          props.saveTask(tempTask);
          setTempTask("");
        }}
      >
        Save
      </button>
    </div>
  );
}

function DisplayTask(props) {
  return (
    <table>
      <tr>
        <th style={{ width: "70%" }}>Task name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>

      {props.todoItems.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.done ? "Done" : "In progress"}</td>
          <td>
            {!item.done ? (
              <button onClick={props.markAsDone(index)}>Mark done</button>
            ) : (
              ""
            )}
          </td>
        </tr>
      ))}
    </table>
  );
}

function App() {
  const [todoList, setTodoList] = useState([
    { name: "Todo1", done: false },
    { name: "Todo2", done: false },
    { name: "Todo3", done: false },
  ]);

  const markAsDone = (index) => {
    return () => {
      console.log(index);
      const temp = [...todoList];
      temp[index].done = true;
      setTodoList(temp);
    };
  };

  const addTodo = (taskName) => {
    const temp = [...todoList];
    temp.push({ name: taskName, done: false });
    setTodoList(temp);
  };

  return (
    <div className="App">
      <AddTask saveTask={addTodo} />
      <DisplayTask todoItems={todoList} markAsDone={markAsDone} />
    </div>
  );
}

export default App;
