import { useEffect, useState } from "react";

// Helper function to load from localStorage
const loadTasks = () => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
};

export default function Tasks() {
  const [tasks, setTasks] = useState(loadTasks());
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border border-gray-300 px-3 py-2 rounded"
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add
        </button>
      </div>

      <div className="flex gap-3 justify-center mb-4">
        <button onClick={() => setFilter("all")} className={`${filter === "all" ? "font-bold underline" : ""}`}>All</button>
        <button onClick={() => setFilter("active")} className={`${filter === "active" ? "font-bold underline" : ""}`}>Active</button>
        <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "font-bold underline" : ""}`}>Completed</button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.length === 0 && <li className="text-gray-500 text-center">No tasks to show</li>}
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between border-b pb-2">
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-1 cursor-pointer ${task.done ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
