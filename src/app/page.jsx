import AddMedicineModal from "@/components/add-mecine-modal";
import MedicineSchedulle from "@/components/medicine-schedulle";
import TimePicker from "@/components/time-picker";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-4 h-full">
      <MedicineSchedulle />
      <AddMedicineModal />
    </main>
  );
}
