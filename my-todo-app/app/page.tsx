"use client";
import { useState } from "react";

interface Todo {
    id: number;
    text: string;
}

export default function TodoApp() {
  // ② 状態管理：入力中の文字と、ToDoのリスト
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // Todo型の配列！

  // ③ タスクを追加する関数
  const addTodo = () => {
    if (!inputText) return; // 空なら無視
    
    const newTodo: Todo = {
      id: Date.now(), // 簡易的なID
      text: inputText,
    };

    setTodos([...todos, newTodo]); // 今までのリストに新しいのを合体！
    setInputText(""); // 入力欄を空にする
  };

  return (
    <div className="max-w-md mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">ToDo</h1>

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border p-2 flex-1 text-black"
          placeholder="次は何する？"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">
          追加
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b p-2 flex justify-between">
            {todo.text}
            <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} className="text-red-500">
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}