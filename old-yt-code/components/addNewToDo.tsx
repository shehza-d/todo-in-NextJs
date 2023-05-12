"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const addTodo = async (name: string, refresh: any) => {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
};

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
