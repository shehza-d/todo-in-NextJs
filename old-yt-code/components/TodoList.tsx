import Todo from "./todo";
import { todoObj } from "../types/types";

const getTodos = async () => {
  // `https://gray-exuberant-nightingale.cyclic.app/todos`
  let todos = await fetch(`http://localhost:3000/api/todo/list`);
  console.log(todos.json());
  return await todos.json();
};

export default function TodoList() {
  let res;
  (async () => (res = await getTodos()))();
  console.log(res);

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
         {res?.todos.map((eachTodo: todoObj) => {
          return (
            <li key={eachTodo.id} style={{ padding: "5px 0" }}>
              <Todo todo={eachTodo} />
            </li>
          );
        })} 
      </ul>
    </div>
  );
}
