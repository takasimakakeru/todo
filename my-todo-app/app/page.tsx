"use client";
import styles from "./page.css";
import { useState } from "react";

interface Todo {
    id: number;
    text: string;
}

export default function TodoApp() {
  // ② 状態管理：入力中の文字と、ToDoのリスト
  const [inputText, setInputText] = useState<string>("");
  
  let titlename = "Todoリストの名前";
  return (
    <>
    <header>
      <ul>
        <li><input type="text" placeholder={titlename}></input></li>
        <li><p className="kyouyuu">共有する</p></li>
        <li><p className="settings">・・・</p></li>
      </ul>
    </header>
    <main className="main">
      <div className="Todo">
        <ul>
          <li>
  <input 
    type="text" 
    placeholder="予定を入力します..." 
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
    className="text-black" /* 背景が白なら不要ですが念のため */
  />
</li>
        </ul>
      </div>
    </main>
    <footer className="footer">
      <ul>
        <li>ボードの切り替え</li>
      </ul>
      <p className="tyosakuken">&copy;</p>
    </footer>
    </>
  );
}