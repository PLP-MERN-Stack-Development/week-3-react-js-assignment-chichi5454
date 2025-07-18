import { useTheme } from '../context/ThemeContext';

export default function Layout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
}
