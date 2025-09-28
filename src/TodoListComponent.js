import { useState } from "react";
import "../src/Styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TodoListComponent() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState([]);

  function handleInputTask(e) {
    setTask(e.target.value);
  }

  function handleAdd() {
    if (task !== "") {
      setResult([...result, task]);
      setTask("");
      alert("task added successful");
    } else {
      alert("Enter your task");
    }
  }

  return (
    <>
      <div className="container">
        <div className="flex-row">
          <input
            type="text"
            value={task}
            placeholder="Enter your task..."
            onChange={handleInputTask}
            className="input-field"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <button onClick={handleAdd}>ADD</button>
        </div>

        <div className="result">
          {result &&
            result.map((item, index) => {
              return (
                <div className="result-item" key={index}>
                  <input type="checkbox" className="check-box" />
                  {item}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TodoListComponent;
