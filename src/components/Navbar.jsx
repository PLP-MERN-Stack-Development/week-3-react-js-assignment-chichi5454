import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
      </div>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="bg-white text-blue-600 px-3 py-1 rounded"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
