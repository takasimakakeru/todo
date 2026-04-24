"use client";
import { useState } from "react";

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const handleClick = () => {
            alert(inputValue + " を追加しようとしましたね！");
        };
    return (
        <div className="p-10">
            {}
            <h1>TodoList</h1>
            <input
            type="text"
            className="border p-2 text-black"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        {
            <button onClick={handleClick} className="ml-2 bg-blue-500 text-white p-2">
                追加
            </button>
        }
        </div>
    )
}