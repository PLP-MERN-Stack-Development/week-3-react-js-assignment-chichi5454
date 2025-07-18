import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <Card title="Hello Bestie">
        <p>Welcome to the homepage ✨</p>
        <div className="mt-4 space-x-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>
    </div>
  );
}
