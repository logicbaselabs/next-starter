"use client";
import { useState } from "react";

export default function Add() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="text-center font-bold p-20 flex flex-col gap-10"
      >
        <input
          className="border border-slate-800 outline-0 px-4 py-2 rounded"
          placeholder="Enter recipe title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="submit"
          value="Submit"
          className="bg-gray-800 py-2 rounded"
        />
      </form>
    </div>
  );
}
