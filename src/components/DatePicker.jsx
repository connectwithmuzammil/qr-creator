import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerInput({ startDate, endDate, onDateChange }) {
  // Update start date
  const handleStartDateChange = (date) => {
    onDateChange({ startDate: date, endDate });
  };

  // Update end date
  const handleEndDateChange = (date) => {
    onDateChange({ startDate, endDate: date });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        {/* Start Date Picker */}
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
        />

        {/* End Date Picker */}
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
