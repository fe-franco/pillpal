import { ModeToggle } from "./mode-toggle";

export function NavBar() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold text-primary">PillPal</h1>
      <div className="flex items-center space-x-4">
        <ModeToggle />
      </div>
    </header>
  );
}
