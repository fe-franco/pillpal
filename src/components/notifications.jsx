import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <BellIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Notification</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Take Paracetamol in 10 minutes</DropdownMenuItem>
        <DropdownMenuItem>Take Aspirin in 20 minutes</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
