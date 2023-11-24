import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { MedicineForm } from "./medicine-form";

const AddMedicineModal = () => {
  // Component logic goes here

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 rounded-full p-0 m-0 w-10 h-10"
          variant="default"
        >
          <Plus className="h-6 w-6 text-white" />
          <span className="sr-only">Add New Medicine</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Medicine</DialogTitle>
        </DialogHeader>
        <MedicineForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddMedicineModal;
