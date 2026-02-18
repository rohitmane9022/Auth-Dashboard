"use client";

import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Please fill all fields");
      return;
    }

    onAddTask({
      title,
      price,
      skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
    });

    setTitle("");
    setPrice("");
    setSkills("");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
      <h2 className="text-base font-semibold text-gray-900 mb-4">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Price (₹)"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}