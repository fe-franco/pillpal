import AddMedicineModal from "@/components/add-mecine-modal";
import MedicineSchedulle from "@/components/medicine-schedulle";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-4">
      <MedicineSchedulle />
      <AddMedicineModal />
    </main>
  );
}
