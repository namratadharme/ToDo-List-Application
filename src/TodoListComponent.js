import { useState } from "react";
import "../src/Styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TodoListComponent() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  function handleInputTask(e) {
    setTask(e.target.value);
  }

  function handleAdd() {
    if (task.trim()) {
      setResult([...result, task]);
      setTask("");
    }
  }

  function handleCheckedItem(item) {
    if (checkedItem.includes(item)) {
      setCheckedItem(checkedItem.filter((i) => i !== item));
    } else {
      setCheckedItem([...checkedItem, item]);
    }
  }
  function handleDelete() {
    const newResult = result.filter((item) => !checkedItem.includes(item));
    setResult(newResult);
    setCheckedItem([]);
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
          <button onClick={handleAdd} className="add-btn">
            ADD
          </button>
        </div>

        <ul className="result">
          {result &&
            result.map((item, index) => {
              return (
                <li key={index} className="list-item">
                  <div>
                    <input
                      type="checkbox"
                      value={task}
                      checked={checkedItem.includes(item)}
                      className="check-box"
                      onChange={() => handleCheckedItem(item)}
                    />
                    {item}
                  </div>
                  <button className="delete-btn" onClick={() => handleDelete()}>
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
