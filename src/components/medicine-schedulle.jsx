import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon } from "lucide-react";

const Medicine = ({ id, time, name, taken }) => {
  return (
    <li
      className={cn(
        `mb-2 text-sm flex justify-between items-center space-x-2`,
        taken ? "text-gray-500 justify-normal" : ""
      )}
    >
      <span>
        {time ? time + " -" : ""} {name}
      </span>
      {taken && <CheckCircle2Icon className="h-4 w-4 text-coral-500 mr-2" />}
      {!taken && (
        <form>
          <Button className="text-coral-500 border-coral-500" variant="outline">
            Mark as taken
          </Button>
        </form>
      )}
    </li>
  );
};

const UpcomingMedicine = () => {
  const medicines = [
    { id: 1, scheduledTime: "08:00", name: "Paracetamol" },
    { id: 2, scheduledTime: "08:00", name: "Aspirin" },
    { id: 3, scheduledTime: "08:00", name: "Ibuprofen" },
    { id: 4, scheduledTime: "04:00", name: "Antihistamine" },
    { id: 5, scheduledTime: "04:00", name: "Cough Syrup" },
    { id: 6, scheduledTime: "04:00", name: "Vitamin C" },
    { id: 7, scheduledTime: "20:00", name: "Sleeping Pill" },
    { id: 8, scheduledTime: "20:00", name: "Melatonin" },
    { id: 9, scheduledTime: "20:00", name: "Antacid" },
    { id: 10, scheduledTime: "20:00", name: "Antibiotic" },
  ];

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Group medicines by time
  const groups = medicines.reduce((groups, medicine) => {
    const time = medicine.scheduledTime;
    if (!groups[time]) {
      groups[time] = [];
    }
    groups[time].push(medicine);
    return groups;
  }, {});

  // Sort grouped medicines by how close they are to the current time
  Object.entries(groups).forEach(([time, medicines]) => {
    groups[time] = medicines.sort((a, b) => {
      const aDiff = Math.abs(
        new Date(`1970/01/01 ${currentTime}`) -
          new Date(`1970/01/01 ${a.scheduledTime}`)
      );
      const bDiff = Math.abs(
        new Date(`1970/01/01 ${currentTime}`) -
          new Date(`1970/01/01 ${b.scheduledTime}`)
      );
      return aDiff - bDiff;
    });
  });

  const [firstGroup] = Object.values(groups);

  // Remove first group from groups
  delete groups[firstGroup[0].scheduledTime];

  return (
    <>
      <h2 className="text-sm font-semibold pb-2">Next</h2>
      <ul>
        {firstGroup.map((medicine) => (
          <React.Fragment key={medicine.id}>
            <Medicine
              time={medicine.scheduledTime}
              name={medicine.name}
              taken={false}
            />
          </React.Fragment>
        ))}

        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex space-x-2 -ml-4 mb-4">
              <span className="text-xs">Toggle upcoming</span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {Object.entries(groups).map(([time, medicines], index) => (
              <div key={time}>
                <h2 className="text-sm font-semibold pb-2">{time}</h2>
                <ul>
                  {medicines.map((medicine) => (
                    <React.Fragment key={medicine.id}>
                      <Medicine name={medicine.name} taken={false} />
                    </React.Fragment>
                  ))}
                </ul>
                {index !== groups.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </ul>
    </>
  );
};

const TakenMedicine = () => {
  const medicines = [
    { takenDate: new Date("2023-11-24T08:00:00"), name: "Paracetamol" },
    { takenDate: new Date("2022-10-01T12:00:00"), name: "Aspirin" },
    { takenDate: new Date("2022-10-02T08:00:00"), name: "Ibuprofen" },
    { takenDate: new Date("2022-10-02T12:00:00"), name: "Antihistamine" },
    { takenDate: new Date("2022-10-03T08:00:00"), name: "Cough Syrup" },
    { takenDate: new Date("2022-10-03T12:00:00"), name: "Vitamin C" },
    { takenDate: new Date("2022-10-04T08:00:00"), name: "Sleeping Pill" },
    { takenDate: new Date("2022-10-04T12:00:00"), name: "Melatonin" },
    { takenDate: new Date("2022-10-05T08:00:00"), name: "Antacid" },
    { takenDate: new Date("2022-10-05T12:00:00"), name: "Antibiotic" },
    { takenDate: new Date("2022-10-06T08:00:00"), name: "Medicine 11" },
    { takenDate: new Date("2022-10-06T12:00:00"), name: "Medicine 12" },
    { takenDate: new Date("2022-10-07T08:00:00"), name: "Medicine 13" },
    { takenDate: new Date("2022-10-07T12:00:00"), name: "Medicine 14" },
    { takenDate: new Date("2022-10-08T08:00:00"), name: "Medicine 15" },
    { takenDate: new Date("2022-10-08T12:00:00"), name: "Medicine 16" },
    { takenDate: new Date("2022-10-09T08:00:00"), name: "Medicine 17" },
    { takenDate: new Date("2022-10-09T12:00:00"), name: "Medicine 18" },
    { takenDate: new Date("2022-10-10T08:00:00"), name: "Medicine 19" },
    { takenDate: new Date("2022-10-10T12:00:00"), name: "Medicine 20" },
  ];

  // Group medicines by date
  const groupedMedicines = medicines.reduce((groups, medicine) => {
    const date = medicine.takenDate.toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(medicine);
    return groups;
  }, {});

  // Sort grouped medicines by date
  Object.entries(groupedMedicines).forEach(([date, medicines]) => {
    groupedMedicines[date] = medicines.sort(
      (a, b) => b.takenDate - a.takenDate
    );
  });

  // Get today's medicines
  const today = new Date().toDateString();
  const todayMedicines = groupedMedicines[today] || [];
  // Remove today's medicines from grouped medicines
  delete groupedMedicines[today];

  return (
    <>
      <h2 className="text-sm font-semibold pb-2">Today</h2>
      <ul>
        {todayMedicines.map((medicine) => (
          <React.Fragment key={medicine.takenDate}>
            <Medicine
              time={medicine.takenDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              name={medicine.name}
              taken
            />
          </React.Fragment>
        ))}
      </ul>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex space-x-2 -ml-4 mb-4">
            <span className="text-xs">Toggle taken</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {Object.entries(groupedMedicines).map(([date, medicines], index) => (
            <div key={date}>
              <h2 className="text-sm font-semibold pb-2">{date}</h2>
              <ul>
                {medicines.map((medicine) => (
                  <React.Fragment key={medicine.takenDate}>
                    <Medicine
                      time={medicine.takenDate.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      name={medicine.name}
                      taken
                    />
                  </React.Fragment>
                ))}
              </ul>
              {index !== groupedMedicines.length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

const MedicineSchedulle = () => {
  return (
    <section className="h-[80%]">
      <h1 className="text-2xl font-bold text-primary pb-4">
        Medicine Schedulle
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
        <Card className="h-full overflow-auto">
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <UpcomingMedicine />
          </CardContent>
        </Card>
        <Card className="h-full overflow-auto">
          <CardHeader>
            <CardTitle>Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <TakenMedicine />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MedicineSchedulle;
