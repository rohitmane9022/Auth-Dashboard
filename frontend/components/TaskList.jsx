"use client";

import { useState } from "react";

export default function TaskList({ tasks, onDelete, onUpdate }) {
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editSkills, setEditSkills] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (task) => {
    setEditId(task._id);
    setEditTitle(task.title);
    setEditPrice(task.price || "");
    setEditSkills(task.skills ? task.skills.join(", ") : "");
  };

  const handleSave = (id) => {
    onUpdate(id, {
      title: editTitle,
      price: editPrice,
      skills: editSkills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    });

    setEditId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-900">
          Your Tasks
        </h2>
        <span className="text-xs text-gray-400">
          {tasks.length} task{tasks.length !== 1 ? "s" : ""}
        </span>
      </div>

      <input
         className="w-full px-3 py-2.5 mb-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredTasks.length === 0 ? (
        <div className="text-center py-10 text-gray-400 text-sm">
          {tasks.length === 0
            ? "No tasks yet. Add one above!"
            : "No tasks match your search."}
        </div>
      ) : (
        <ul className="space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task._id}
              className="border border-gray-200 rounded-xl p-4 bg-white"
            >
              {editId === task._id ? (
                <div className="space-y-3 flex gap-2 flex-wrap">
                  <input
                   className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Title"
                  />

                  <input
                   className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    placeholder="Price"
                  />

                  <input
                   className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    value={editSkills}
                    onChange={(e) => setEditSkills(e.target.value)}
                    placeholder="Skills (comma separated)"
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSave(task._id)}
                      className="px-4 py-1.5 bg-green-500 text-white text-xs rounded-lg"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditId(null)}
                      className="px-4 py-1.5 border bg-red-50 text-red-500 text-xs rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {task.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      ₹{task.price}
                      {task.skills?.length > 0 &&
                        ` · ${task.skills.join(", ")}`}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(task)}
                      className="px-3 py-1.5 bg-blue-50 text-blue-500 text-xs rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(task._id)}
                      className="px-3 py-1.5 bg-red-50 text-red-500 text-xs rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}