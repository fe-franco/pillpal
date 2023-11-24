import TimePicker from "./time-picker";
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
      <Input
        name="medicine-name"
        className="w-full"
        placeholder="Medicine Name"
        type="text"
      />
      <Select name="frequency">
        <SelectTrigger>
          <SelectValue placeholder="Select Frequency" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Frequency</SelectLabel>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="twice-daily">Twice Daily</SelectItem>
            <SelectItem value="thrice-daily">Thrice Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <TimePicker />

      <Button type="submit" variant="default" className="w-full">
        Add Medicine
      </Button>
    </form>
  );
}
