import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { MedicineForm } from "@/components/medicine-form";
import { Modal } from "@/components/modal";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-4">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Collapsible defaultOpen>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-primary">Upcoming</h2>
                <CollapsibleTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <svg
                      className=" h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    <span className="sr-only">Toggle upcoming</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <ul>
                  <li className="mb-2 text-sm flex justify-between">
                    <span>08:00 AM - Paracetamol</span>
                    <Button
                      className="text-coral-500 border-coral-500"
                      variant="outline"
                    >
                      Mark as taken
                    </Button>
                  </li>
                  <Separator className="my-4" />
                  <li className="mb-2 text-sm flex justify-between">
                    <span>12:00 PM - Aspirin</span>
                    <Button
                      className="text-coral-500 border-coral-500"
                      variant="outline"
                    >
                      Mark as taken
                    </Button>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
            <Separator className="my-4" />
            <Collapsible>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-primary">Taken</h2>
                <CollapsibleTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <svg
                      className=" h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    <span className="sr-only">Toggle taken</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <ul>
                  <li className="mb-2 text-sm flex justify-between">
                    <span>03:00 PM - Ibuprofen</span>
                    <Button
                      className="text-coral-500 border-coral-500"
                      variant="outline"
                    >
                      Mark as taken
                    </Button>
                  </li>
                  <Separator className="my-4" />
                  <li className="mb-2 text-sm flex justify-between">
                    <span>09:00 PM - Paracetamol</span>
                    <Button
                      className="text-coral-500 border-coral-500"
                      variant="outline"
                    >
                      Mark as taken
                    </Button>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>
      <Modal closeHref={"/"}>
        <MedicineForm />
        {/* <Dialog>
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
        </Dialog> */}
      </Modal>
    </main>
  );
}
