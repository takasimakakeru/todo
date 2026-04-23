"use client";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="flex flex-col items-center p-24 font-sans">
      <h1 className="text-4xl font-bold mb-8">My Todo List</h1>
      
      <div className="flex gap-2 mb-8">
        <input
          className="border p-2 rounded text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="タスクを入力..."
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">追加</button>
      </div>

      <ul className="w-64">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2 border-b pb-1">
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 text-sm">削除</button>
          </li>
        ))}
      </ul>
    </main>
  );
}