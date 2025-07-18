import { Button } from '../components/Button';
import { Card } from '../components/Card';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card title="Welcome to React Task Manager">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Task Management Solution</h2>
          <p className="mb-4">
            Manage your tasks efficiently with our modern task manager built with React and Tailwind CSS.
          </p>
          <div className="space-y-4">
            <p>Key Features:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Task creation and management</li>
              <li>Task filtering (All, Active, Completed)</li>
              <li>Local storage persistence</li>
              <li>Dark/Light mode theme switching</li>
              <li>API integration with JSONPlaceholder</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
