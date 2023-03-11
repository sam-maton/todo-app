import { KeyboardEvent, useState } from "react";
import MoonSvg from "./assets/icon-moon.svg";
import DeleteSvg from "./assets/icon-cross.svg";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Cut the grass"]);

  const [newTodo, setNewTodo] = useState("");

  function onEnter(e: KeyboardEvent) {
    if (e.key === "Enter" && newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  return (
    <>
      <header className="h-[200px] bg-[url('./assets/bg-mobile-light.jpg')]">
        <section className="mx-auto flex max-w-xs flex-col">
          <div className="flex justify-between py-8">
            <h1>TODO</h1>
            <img src={MoonSvg} alt="toggle dark mode" />
          </div>
          <div className="mx-auto flex gap-4 rounded-md bg-fm-very-light-gray p-4">
            <input type="checkbox" />
            <input
              type="text"
              placeholder="Create a new todo..."
              className="w-full bg-fm-very-light-gray p-1"
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              onKeyDown={onEnter}
              value={newTodo}
            />
          </div>
        </section>
        <section className="mx-auto max-w-xs">
          <ul className="mt-8 flex flex-col divide-y divide-fm-light-grayish-blue rounded bg-fm-very-light-gray">
            {todos.map((todo, index) => {
              return (
                <li className="flex items-center gap-4 p-4" key={todo}>
                  <input type="checkbox" />
                  <p className="w-full">{todo}</p>
                  <button>
                    <img
                      className="h-4 w-4"
                      src={DeleteSvg}
                      alt="Delete todo"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </header>
    </>
  );
}

export default App;
