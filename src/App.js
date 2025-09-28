import react from "react";
import TodoListComponent from "./TodoListComponent";
import "../src/Styles/app.css";

function App() {
  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <TodoListComponent />
    </div>
  );
}

export default App;
