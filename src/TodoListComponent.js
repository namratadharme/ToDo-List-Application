import { useState } from "react";
import "../src/Styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TodoListComponent() {
  const [newtask, setNewTask] = useState("");
  const [result, setResult] = useState([]);

  const [error, setError] = useState();

  function handleInputTask(e) {
    setNewTask(e.target.value);
  }

  function handleAdd() {
    if (!newtask.trim()) {
      setError("Please Enter Your task");
    } else {
      const task = {
        id: Date.now(),
        text: newtask,
        completed: false,
      };
      console.log(task);
      setResult([...result, task]);
      setNewTask("");
      setError("");
    }
  }

  function handleCheckedItem(id) {
    const updatedResult = result.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setResult(updatedResult);
    console.log(result);
  }
  function handleDelete(id) {
    const newResult = result.filter((item) => item.id !== id);
    setResult(newResult);
  }

  return (
    <>
      <div className="container">
        <div className="flex-row">
          <input
            type="text"
            value={newtask}
            placeholder="Enter your task..."
            onChange={handleInputTask}
            className="input-field"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <button onClick={handleAdd} className="add-btn">
            ADD
          </button>
        </div>
        <p className="para">{error ? error : ""}</p>

        <ul className="result">
          {result &&
            result.map((item) => {
              return (
                <li key={item.id} className="list-item">
                  <div>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      className="check-box"
                      onChange={() => handleCheckedItem(item.id)}
                    />
                    <span>{item.text}</span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default TodoListComponent;
