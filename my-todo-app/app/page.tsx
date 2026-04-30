"use client";
import { useState } from "react";
export default function Home() {
    const link = document.querySelector(".link");
    link?.addEventListener("click", () => {
        window.location.href = "abehiroshi.la.coocan.jp"
    })
    return (
        <p  className="link">リンク</p>
    );
}