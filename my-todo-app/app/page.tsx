"use client";
import { useState } from "react";

interface Todo {
    id: number;
    text: string;
}

export default function TodoApp() {
  // ② 状態管理：入力中の文字と、ToDoのリスト
  const [inputText, setInputText] = useState<string>("");
  
  let titlename = //なんかうまいこと入れてもろて
  return (
    <header>
      <ul>
        <li><p className="todotitle">{titlename}</p></li>
        <li><p className="kyouyuu">共有する</p></li>
        <li><p className="settings">・・・</p></li>
      </ul>
    </header>
    
  );
}