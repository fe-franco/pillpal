import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Medicine = ({ id, time, name, taken }) => {
  return (
    <li
      className={`mb-2 text-sm flex justify-between ${
        taken ? "text-gray-500" : ""
      }`}
    >
      <span>
        {time} - {name}
      </span>
      {!taken && (
        <Button className="text-coral-500 border-coral-500" variant="outline">
          Mark as taken
        </Button>
      )}
    </li>
  );
};

const UpcomingMedicine = () => {
  const medicines = [
    { id: 1, time: "08:00 AM", name: "Paracetamol" },
    { id: 2, time: "12:00 PM", name: "Aspirin" },
  ];

  return (
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
          {medicines.map((medicine, index) => (
            <React.Fragment key={medicine.time}>
              <Medicine
                time={medicine.time}
                name={medicine.name}
                id={medicine.id}
              />
              {index !== medicines.length - 1 && <Separator className="my-4" />}
            </React.Fragment>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

const TakenMedicine = () => {
  const medicines = [
    { time: "08:00 AM", name: "Paracetamol" },
    { time: "12:00 PM", name: "Aspirin" },
  ];

  return (
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
          {medicines.map((medicine, index) => (
            <React.Fragment key={medicine.time}>
              <Medicine time={medicine.time} name={medicine.name} taken />
              {index !== medicines.length - 1 && <Separator className="my-4" />}
            </React.Fragment>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

const MedicineSchedulle = () => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <UpcomingMedicine />
          <Separator className="my-4" />
          <TakenMedicine />
        </CardContent>
      </Card>
    </section>
  );
};

export default MedicineSchedulle;
