"use client";
import { useRouter } from "next/navigation";
import { todoObj } from "../types/types";

//single todo

const update = async (id: string, isDone: boolean, refresh: any) => {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
};

const deleteTodo = async (id: string, refresh: any) => {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
};

export default function Todo({ todo }: { todo: todoObj }) {
  const router = useRouter();

  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}

