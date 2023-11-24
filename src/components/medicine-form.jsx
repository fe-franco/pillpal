import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function MedicineForm() {
  return (
    <form className="space-y-4">
      <Input className="w-full" placeholder="Medicine Name" type="text" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Frequency" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Frequency</SelectLabel>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="twice-daily">Twice Daily</SelectItem>
            <SelectItem value="thrice-daily">Thrice Daily</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit" variant="default" className="w-full">
        Add Medicine
      </Button>
    </form>
  );
}
