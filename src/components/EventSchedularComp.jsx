import React, { useState } from "react";
import moment from "moment-timezone";
import { InputComponent } from "./InputComponent";

const EventSchedularComp = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(moment.tz.guess());

  // Get all time zone names and format them with offsets
  const timeZones = moment.tz.names().map((zone) => {
    const offset = moment.tz(zone).format("Z"); // Format the offset (e.g., +05:00)
    return `${zone} (GMT${offset})`;
  });

  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };
  return (
    <div className="eventScheduleComp">
      <div className="top">
        <p>AM/PM</p>
        <p>24 Hours</p>
      </div>
      <div className="bottom">
        <div className="input-con">
          <div className="input-wrap">
            <label>Start</label>
            <input type="date" name="" id="" placeholder="e.g Nov 4, 2023" />
          </div>
          <input type="time" name="" id="" />
        </div>
        <div className="input-con">
          <div className="input-wrap">
            <label>End</label>
            <input type="date" name="" id="" placeholder="e.g Nov 5, 2023" />
          </div>
          <input type="time" name="" id="" />
        </div>
        <div className="timezone-con">
          <label className="label-allday">
            <input type="checkbox" />
            All day
          </label>
          <div className="timezone-main">
            <label htmlFor="timezone">Time Zone:</label>
            <select
              id="timezone"
              value={selectedTimeZone}
              onChange={handleTimeZoneChange}
            >
              {timeZones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>
        </div>
        <InputComponent
          label={"Add to calendar button text"}
          placeholder={"e.g. Add to calendar"}
        />
        <p className="allow-guest-txt">Allow guests to add your event directly to their calendars.</p>
      </div>
    </div>
  );
};

export default EventSchedularComp;
