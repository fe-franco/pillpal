import { Link } from "lucide-react";
import TimePicker from "./time-picker";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import axios from "axios";
import { Suspense } from "react";
import { Combobox } from "./ui/combo-box";

export async function MedicineForm() {
  return (
    <form className="space-y-4">
      <Suspense>
        <MedicineSelect />
      </Suspense>
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

async function MedicineSelect() {
  const response = await axios.get(
    "https://pillpal.up.railway.app/api/medicine"
  );

  const medicines = response.data;
  // [
  //   { name: 'Paracetamol', id: 1 },
  //   { name: 'Aspirin', id: 2 },
  //   { name: 'Ibuprofen', id: 3 },
  //   { name: 'Amoxicillin', id: 4 },
  //   { name: 'Loratadine', id: 5 },
  //   { name: 'Omeprazole', id: 6 }
  // ]

  console.log(typeof medicines);

  return (
    <Combobox
      emptyMessage="No medicine found"
      placeholder="Search Medicine"
      options={medicines.map((medicine) => ({
        label: medicine.name,
        value: medicine.id,
      }))}
    />
  );
}
