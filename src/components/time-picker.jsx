"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const HoursSelect = () => {
  const hours = [...Array(24).keys()].map((hour) => {
    return hour < 10 ? `0${hour}` : hour;
  });

  return (
    <Select name="hour">
      <SelectTrigger>
        <SelectValue placeholder="Select Hour" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Hour</SelectLabel>
          {hours.map((hour) => (
            <SelectItem key={hour} value={hour}>
              {hour}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const MinutesSelect = () => {
  const minutes = [...Array(60).keys()].map((minute) => {
    return minute < 10 ? `0${minute}` : minute;
  });

  return (
    <Select name="minute">
      <SelectTrigger>
        <SelectValue placeholder="Select Minute" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Minute</SelectLabel>
          {minutes.map((minute) => (
            <SelectItem key={minute} value={minute}>
              {minute}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const TimePicker = () => {
  return (
    <div className="flex space-x-2">
      <HoursSelect />
      <MinutesSelect />
    </div>
  );
};

export default TimePicker;
