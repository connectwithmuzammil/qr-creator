import React, { useEffect, useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import { InputComponent } from "../InputComponent";
import {
  FacilitiesAccommodationIcon,
  DribbleSocial,
  FacebookSocial,
  FlikrSocial,
  GithubSocial,
  InstagramSocial,
  LineSocial,
  LinkedinSocial,
  RedditSocial,
  SkypeSocial,
  SnapchatSocial,
  TiktokSocial,
  TripadvisorSocial,
  TumblrSocial,
  TwitterSocial,
  VimeoSocial,
  VkontakteSocial,
  WebSocial,
  XingSocial,
  FacilitiesBarIcon,
  FacilitiesCafeIcon,
  FacilitiesChildFriendlyIcon,
  FacilitiesParkingIcon,
  FacilitiesPetFriendlyIcon,
  FacilitiesRestaurantIcon,
  FacilitiesRestroomIcon,
  FacilitiesSeatingIcon,
  FacilitiesNearPublicTransportIcon,
  FacilitiesTaxiIcon,
  FacilitiesWheelChairAccessIcon,
  FacilitiesWifiIcon,
} from "../../Helper/SocialSvgIcons";
import ImageUploadComponent from "../ImageUploadComp";
import SocialIconsComp from "../SocialIconComp";
import FacilitiesIconComp from "../FacilitiesIconComp";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewBusiness } from "./QRPreviewAll";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import { LocalizationProvider, StaticTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import dayjs from "dayjs";
import { Add as AddIcon } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewPreviewModal from "../Modal/QR/ViewPreviewModal";
import { MdErrorOutline } from "react-icons/md";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const colors = [
  { id: "blue", background: "#d1e5fa", button: "#1466b8" },
  { id: "green", background: "#e8fce8", button: "#0e8b70" },
  { id: "yellow", background: "#fff9cc", button: "#998600" },
  { id: "red", background: "#fecdd6", button: "#b00223" },
];
const icons = {
  facebook: <FacebookSocial />,
  instagram: <InstagramSocial />,
  twitter: <TwitterSocial />,
  dribble: <DribbleSocial />,
  flickr: <FlikrSocial />,
  github: <GithubSocial />,
  line: <LineSocial />,
  linkedin: <LinkedinSocial />,
  reddit: <RedditSocial />,
  skype: <SkypeSocial />,
  snapchat: <SnapchatSocial />,
  tiktok: <TiktokSocial />,
  tripadvisor: <TripadvisorSocial />,
  tumblr: <TumblrSocial />,
  vimeo: <VimeoSocial />,
  vkontakte: <VkontakteSocial />,
  web: <WebSocial />,
  xing: <XingSocial />,
};
const FacilitiesIcon = {
  Accommodation: <FacilitiesAccommodationIcon />,
  Bar: <FacilitiesBarIcon />,
  Cafe: <FacilitiesCafeIcon />,
  ChildFriendly: <FacilitiesChildFriendlyIcon />,
  Parking: <FacilitiesParkingIcon />,
  PetFriendly: <FacilitiesPetFriendlyIcon />,
  Restaurant: <FacilitiesRestaurantIcon />,
  Restroom: <FacilitiesRestroomIcon />,
  Seating: <FacilitiesSeatingIcon />,
  NearPublicTransport: <FacilitiesNearPublicTransportIcon />,
  Taxi: <FacilitiesTaxiIcon />,
  WheelChairAccess: <FacilitiesWheelChairAccessIcon />,
  Wifi: <FacilitiesWifiIcon />,
};

// Helper function to convert time formats
const convertTimeFormat = (time, format) => {
  if (!time) return null;

  if (format === "AM-PM") {
    // Convert 24-hour format to AM/PM
    let [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 12:00 instead of 0:00
    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  } else {
    // Convert AM/PM format to 24-hour
    let [timePart, ampm] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (ampm === "PM" && hours < 12) hours += 12; // Convert PM hours to 24-hour
    if (ampm === "AM" && hours === 12) hours = 0; // Convert 12 AM to 00:00

    return `${hours}:${minutes.toString().padStart(2, "0")}`; // Format with leading zeros for minutes
  }
};

const BUSINESS = ({ localQrData, setLocalQrData, errors, setErrors }) => {
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const [showModalPreview, setShowModalPreview] = useState(false);

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  //EDIT
  const location = useLocation();

  useEffect(() => {
    if (location.state?.qrData) {
      const qrDataFromLocation = location.state.qrData.data;
      // console.log("qrDataFromLocation", qrDataFromLocation);

      // Set the data to local state
      setLocalQrData(qrDataFromLocation);
      setTimeFormat(qrDataFromLocation?.opening_hours_format);

      if (qrDataFromLocation?.opening_hours_days) {
        const allDays = [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday",
        ];
        const updatedOpeningHoursDays = allDays.reduce((acc, day) => {
          acc[day] = qrDataFromLocation.opening_hours_days[day] || {
            enabled: false,
            times: [],
          };
          return acc;
        }, {});

        setLocalQrData((prevState) => ({
          ...prevState,
          opening_hours_days: updatedOpeningHoursDays,
        }));
      }

      if (qrDataFromLocation?.color) {
        setLocalQrData((prevQrData) => ({
          ...prevQrData,
          color: qrDataFromLocation?.color,
        }));
      }
    }
  }, [location.state, setLocalQrData]);

  console.log("updatedQrDataBusiness", localQrData);

  const handleImageUpload = (mediaData, name, file) => {
    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageDelete = (fieldName) => {
    // dispatch(resetField({ field: fieldName }));
    setLocalQrData((prevData) => ({
      ...prevData,
      [fieldName]: "",
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFacilitiesIconChange = (iconName, isSelected) => {
    setLocalQrData((prevQrData) => ({
      ...prevQrData,
      business_facilities: {
        ...prevQrData.business_facilities,
        [iconName]: isSelected,
      },
    }));
  };

  //CODE FOR TIMER START
  const [openDialog, setOpenDialog] = useState(false);
  const [currentDay, setCurrentDay] = useState(null);
  const [selectedTimeType, setSelectedTimeType] = useState("start");
  const [timeFormat, setTimeFormat] = useState("AM-PM");

  // Create separate state for each day's times (start and end)
  const [dayTimes, setDayTimes] = useState(() => {
    // Try to retrieve dayTimes from localStorage
    const savedState = localStorage.getItem("dayTimes");

    // If savedState exists, parse it and convert ISO strings to dayjs objects
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      Object.keys(parsedState).forEach((day) => {
        // Convert saved ISO string back to dayjs object
        parsedState[day].start = dayjs(parsedState[day].start);
        parsedState[day].end = dayjs(parsedState[day].end);
      });
      return parsedState;
    }

    return {}; // Return an empty object if nothing is saved
  });

  // Store dayTimes in localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(dayTimes).length > 0) {
      const validDayTimes = {};

      Object.keys(dayTimes).forEach((day) => {
        // Ensure times are valid dayjs objects before saving
        if (
          dayjs(dayTimes[day].start).isValid() &&
          dayjs(dayTimes[day].end).isValid()
        ) {
          validDayTimes[day] = {
            start: dayTimes[day].start.toISOString(), // Store start as ISO string
            end: dayTimes[day].end.toISOString(), // Store end as ISO string
          };
        }
      });

      // Save the valid times in localStorage
      localStorage.setItem("dayTimes", JSON.stringify(validDayTimes));
    }
  }, [dayTimes]);

  // Handle time format change (AM/PM vs 24-hour)
  const handleTimeFormatChange = (newFormat) => {
    if (newFormat === timeFormat) {
      // If the new format is the same as the current format, do nothing
      return;
    }

    setTimeFormat(newFormat);

    // Create a deep copy of the opening_hours_days object
    const updatedOpeningHours = Object.keys(
      localQrData.opening_hours_days
    ).reduce((acc, day) => {
      acc[day] = {
        ...localQrData.opening_hours_days[day], // copy the day object
        times: localQrData.opening_hours_days[day].times.map((time) => ({
          start: convertTimeFormat(time.start, newFormat),
          end: convertTimeFormat(time.end, newFormat),
        })),
      };
      return acc;
    }, {});

    // Update the localQrData state with the new format and opening hours
    setLocalQrData({
      ...localQrData,
      opening_hours_format: newFormat,
      opening_hours_days: updatedOpeningHours,
    });
  };

  const handleOpenDialog = (day, timeType) => {
    setCurrentDay(day);
    setSelectedTimeType(timeType);

    const currentDayTimes = localQrData.opening_hours_days[day].times[0];

    if (!dayTimes[day]) {
      setDayTimes((prev) => ({
        ...prev,
        [day]: {
          start: dayjs(currentDayTimes.start || dayjs().startOf("minute")),
          end: dayjs(
            currentDayTimes.end || dayjs().startOf("minute").add(1, "hour")
          ),
        },
      }));
    }

    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveTime = () => {
    if (currentDay) {
      // Create a deep copy of the entire opening_hours_days object
      const updatedOpeningHours = {
        ...localQrData.opening_hours_days,
      };

      // Get existing times for the current day
      const existingTimes = updatedOpeningHours[currentDay].times;

      // If we're saving the first time slot or updating the first slot
      if (existingTimes.length === 0) {
        // Add a new time slot if no existing times
        updatedOpeningHours[currentDay] = {
          ...updatedOpeningHours[currentDay], // Spread to copy the existing properties
          times: [
            {
              start: dayTimes[currentDay].start.format(
                timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm"
              ),
              end: dayTimes[currentDay].end.format(
                timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm"
              ),
            },
          ],
        };
      } else {
        // Update the last time slot in the array immutably
        const lastIndex = existingTimes.length - 1;

        // Create a new updated time slot
        const updatedSlot = {
          ...existingTimes[lastIndex], // Copy the existing slot properties
          start: dayTimes[currentDay].start.format(
            timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm"
          ),
          end: dayTimes[currentDay].end.format(
            timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm"
          ),
        };

        // Update the times array immutably
        updatedOpeningHours[currentDay] = {
          ...updatedOpeningHours[currentDay], // Copy other properties of the current day object
          times: [
            ...existingTimes.slice(0, lastIndex), // Keep all previous times
            updatedSlot, // Add the updated time slot
          ],
        };
      }

      // Now update the localQrData with the modified opening_hours_days
      setLocalQrData({
        ...localQrData,
        opening_hours_days: updatedOpeningHours,
      });
    }

    setOpenDialog(false);
  };

  const handleCheckboxChange = (day) => {
    // Create a deep copy of the localQrData to avoid direct mutation
    const updatedOpeningHours = {
      ...localQrData,
      opening_hours_days: {
        ...localQrData.opening_hours_days,
        [day]: {
          ...localQrData.opening_hours_days[day], // Make sure to copy the day object as well
          enabled: !localQrData.opening_hours_days[day].enabled,
        },
      },
    };

    // When a day is enabled, initialize the start and end times if they are not already set
    if (updatedOpeningHours.opening_hours_days[day].enabled) {
      const startTime = dayjs().startOf("minute");
      const endTime = dayjs().startOf("minute").add(1, "hour");

      // Set the raw dayjs times in dayTimes state
      setDayTimes((prev) => {
        const newState = {
          ...prev,
          [day]: {
            start: startTime,
            end: endTime,
          },
        };

        // Persist the updated dayTimes to localStorage
        localStorage.setItem("dayTimes", JSON.stringify(newState));
        return newState;
      });

      // Set the formatted times in localQrData
      updatedOpeningHours.opening_hours_days[day].times = [
        {
          start: startTime.format(timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm"),
          end: endTime.format(timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm"),
        },
      ];
    } else {
      // If the day is disabled, clear the times array (if desired)
      updatedOpeningHours.opening_hours_days[day].times = [];
    }

    // Log the updated opening hours for debugging
    console.log("updatedOpeningHours", updatedOpeningHours);

    // Update the localQrData with the new opening_hours_days
    setLocalQrData(updatedOpeningHours);
  };

  const addTimeSlot = (day) => {
    const updatedOpeningHours = { ...localQrData };

    // Add a new time slot with default valid times (current time and 1 hour later)
    const newStartTime = dayjs().format(
      timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm"
    );
    const newEndTime = dayjs()
      .add(1, "hour")
      .format(timeFormat === "AM-PM" ? "hh:mm A" : "HH:mm");

    updatedOpeningHours.opening_hours_days[day].times.push({
      start: newStartTime,
      end: newEndTime,
    });

    // Update the localQrData state with the new time slot
    setLocalQrData(updatedOpeningHours);
  };

  const removeTimeSlot = (day, index) => {
    // Prevent removal of the first time slot (default one)
    if (index === 0) return;

    const updatedOpeningHours = { ...localQrData };
    updatedOpeningHours.opening_hours_days[day].times.splice(index, 1);

    setLocalQrData(updatedOpeningHours);
  };

  //CODE FOR TIMER END

  console.log("LocalQRdataBusiness", localQrData);

  return (
    <>
      <div className="business-page">
        <button
          className="viewPreviewbtn"
          onClick={() => setShowModalPreview(true)}
        >
          View Preview
        </button>
        <div className="containerr">
          <div className="left">
            <AccordianComponent title={"Enter the name of your QR code"}>
              <InputComponent
                placeholder="e.g My QR code"
                onChange={handleInputChange}
                name="qr_name"
                value={localQrData?.qr_name}
              />
            </AccordianComponent>
            <AccordianComponent title={"Choose your design"}>
              <CutsomColorPickerComp
                colors={colors}
                qrData={localQrData}
                setQrData={setLocalQrData}
              />
            </AccordianComponent>
            <AccordianComponent title={"Business information"}>
              <ImageUploadComponent
                defaultImage={"/assets/images/default-img.png"}
                onImageUpload={handleImageUpload}
                onImageDelete={handleImageDelete}
                label="Logo"
                name="business_logo"
                onEditImagePreview={localQrData?.business_logo}
              />
              <InputComponent
                label={"Company name"}
                name={"business_company"}
                placeholder={"e.g. Artisan Bakery"}
                onChange={handleInputChange}
                // value={
                //   localQrData?.business_company ||
                //   localQrData?.business_page?.business_company
                // }
                value={
                  localQrData?.business_company ||
                  localQrData?.business_page?.business_company
                }
              />
              <InputComponent
                label={"Title"}
                name={"business_title"}
                placeholder={"e.g. Fresh Bread and Pastries"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_title ||
                  localQrData?.business_page?.business_title
                }
              />
              <InputComponent
                label={"Subtitle"}
                name={"business_subtitle"}
                placeholder={
                  "e.g. Delicious bread and pastries baked daily. vVsit our bakery or order online."
                }
                onChange={handleInputChange}
                value={
                  localQrData?.business_subtitle ||
                  localQrData?.business_page?.business_subtitle
                }
              />
              <div className="wrap-inp-cmp">
                <InputComponent
                  label={"Button text"}
                  name={"business_btn_text"}
                  placeholder={"e.g. View our products"}
                  onChange={handleInputChange}
                  value={
                    localQrData?.business_btn_text ||
                    localQrData?.business_page?.business_btn_text
                  }
                />
                <InputComponent
                  label={"URL"}
                  name={"business_url"}
                  placeholder={"e.g. https://URL here"}
                  onChange={handleInputChange}
                  type="url"
                  value={
                    localQrData?.business_url ||
                    localQrData?.business_page?.business_url
                  }
                />
              </div>
            </AccordianComponent>
            <AccordianComponent title={"Opening hours"}>
              <div className="business-container-timeclock">
                <div className="time-format-selector">
                  <label className="time-format-label">Time Format:</label>
                  <div className="time-format-buttons">
                    <Button
                      // variant={
                      //   timeFormat === "AM-PM" ? "contained" : "outlined"
                      // }
                      onClick={() => handleTimeFormatChange("AM-PM")}
                      className={`time-format-button ${
                        timeFormat === "AM-PM" ? "selected" : ""
                      }`}
                    >
                      AM/PM
                    </Button>
                    <Button
                      // variant={
                      //   timeFormat === "24-hour" ? "contained" : "outlined"
                      // }
                      onClick={() => handleTimeFormatChange("24-hour")}
                      className={`time-format-button ${
                        timeFormat === "24-hour" ? "selected" : ""
                      }`}
                    >
                      24-Hour
                    </Button>
                  </div>
                </div>

                {[
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ].map((day) => (
                  <div key={day} className="day-container">
                    <h3 className="day-title">
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </h3>
                    <div className="checkbox-container">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              localQrData.opening_hours_days[day].enabled
                            }
                            onChange={() => handleCheckboxChange(day)}
                            name={`checkbox-${day}`}
                            color="primary"
                          />
                        }
                        label="Enable"
                      />
                    </div>

                    {localQrData.opening_hours_days[day].enabled && (
                      <div className="time-fields">
                        {/* Map over the time slots */}
                        {localQrData.opening_hours_days[day].times.map(
                          (time, index) => (
                            <div key={index} className="time-slot">
                              <div className="time-slot-container">
                                <TextField
                                  label="Start Time"
                                  value={time.start || ""}
                                  onClick={() => handleOpenDialog(day, "start")}
                                  fullWidth
                                  InputProps={{ readOnly: true }}
                                />
                                <TextField
                                  label="End Time"
                                  value={time.end || ""}
                                  onClick={() => handleOpenDialog(day, "end")}
                                  fullWidth
                                  InputProps={{ readOnly: true }}
                                />
                                {index !== 0 && (
                                  <IconButton
                                    onClick={() => removeTimeSlot(day, index)}
                                    color="error"
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                )}
                              </div>
                              {index === 0 && (
                                <IconButton
                                  onClick={() => addTimeSlot(day)}
                                  className="add-time-slot"
                                >
                                  <AddIcon />
                                </IconButton>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Dialog for time selection */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                  <DialogTitle>Select Time</DialogTitle>
                  <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={["StaticTimePicker", "TimeClock"]}
                      >
                        {timeFormat === "AM-PM" && (
                          <DemoItem>
                            <StaticTimePicker
                              value={
                                dayTimes[currentDay]?.[selectedTimeType] ||
                                dayjs()
                              }
                              onChange={(newValue) => {
                                setDayTimes((prev) => ({
                                  ...prev,
                                  [currentDay]: {
                                    ...prev[currentDay],
                                    [selectedTimeType]: newValue,
                                  },
                                }));
                              }}
                            />
                          </DemoItem>
                        )}
                        {timeFormat === "24-hour" && (
                          <DemoItem>
                            <TimeClock
                              value={
                                dayTimes[currentDay]?.[selectedTimeType] ||
                                dayjs()
                              }
                              onChange={(newValue) => {
                                setDayTimes((prev) => ({
                                  ...prev,
                                  [currentDay]: {
                                    ...prev[currentDay],
                                    [selectedTimeType]: newValue,
                                  },
                                }));
                              }}
                              ampm={false}
                            />
                          </DemoItem>
                        )}
                      </DemoContainer>
                    </LocalizationProvider>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleSaveTime} color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              {errors?.opening_hours_days && (
                <div className="error-message">
                  <MdErrorOutline className="error-icon" />
                  {errors.opening_hours_days}
                </div>
              )}
            </AccordianComponent>

            <AccordianComponent title={"Location"}>
              <div className="wrap-inp-cmp">
                <InputComponent
                  label={"Address"}
                  name={"business_address"}
                  placeholder={"e.g. High Street"}
                  onChange={handleInputChange}
                  value={
                    localQrData?.business_address ||
                    localQrData?.business_page?.business_address
                  }
                />
                <InputComponent
                  label={"Number"}
                  name={"business_numeration"}
                  placeholder={"e.g. 10"}
                  onChange={handleInputChange}
                  value={
                    localQrData?.business_numeration ||
                    localQrData?.business_page?.business_numeration
                  }
                />
                <InputComponent
                  label={"Zip code"}
                  name={"business_postalcode"}
                  placeholder={"e.g. 12548"}
                  onChange={handleInputChange}
                  value={
                    localQrData?.business_postalcode ||
                    localQrData?.business_page?.business_postalcode
                  }
                />
              </div>
              <div className="wrap-inp-cmp">
                <InputComponent
                  label={"City"}
                  name={"business_city"}
                  placeholder={"e.g. New York"}
                  onChange={handleInputChange}
                  value={
                    localQrData?.business_city ??
                    localQrData?.business_page?.business_city
                  }
                />
                <InputComponent
                  label={"State"}
                  name={"business_state"}
                  placeholder={"e.g. 10"}
                  onChange={handleInputChange}
                  value={
                    localQrData?.business_state ||
                    localQrData?.business_page?.business_state
                  }
                />
                <InputComponent
                  label={"Country"}
                  name={"business_country"}
                  placeholder={"e.g. USA"}
                  onChange={handleInputChange}
                  value={
                    localQrData?.business_country ||
                    localQrData?.business_page?.business_country
                  }
                />
              </div>
            </AccordianComponent>
            <AccordianComponent title={"Facilities"}>
              <FacilitiesIconComp
                icons={FacilitiesIcon}
                onIconClick={handleFacilitiesIconChange}
                initialSelectedIcons={localQrData.business_facilities}
              />
            </AccordianComponent>
            <AccordianComponent title={"Contact information"}>
              <InputComponent
                label={"Name"}
                name={"business_name"}
                placeholder={"e.g. John Smith"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_name ||
                  localQrData?.business_page?.business_name
                }
              />
              <InputComponent
                label={"Phone"}
                name={"business_phone"}
                placeholder={"e.g. (123)-123-123-123"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_phone ||
                  localQrData?.business_page?.business_phone
                }
              />
              <InputComponent
                label={"Email"}
                name={"business_email"}
                placeholder={"e.g. youremail@domain.com"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_email ||
                  localQrData?.business_page?.business_email
                }
              />
              <InputComponent
                label={"Website"}
                name={"business_website"}
                placeholder={"e.g. https://www.artisian-bakery.com"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_website ||
                  localQrData?.business_page?.business_website
                }
              />
            </AccordianComponent>
            <AccordianComponent title={"About the company"}>
              <InputComponent
                name={"business_about"}
                placeholder={
                  "e.g. Indicate your business opening hour and/or any relevant information about it"
                }
                onChange={handleInputChange}
                value={
                  localQrData?.business_about ||
                  localQrData?.business_page?.business_about
                }
              />
            </AccordianComponent>
            <AccordianComponent title={"Social networks"}>
              <p className="social-con-content">Add Link to...</p>
              <SocialIconsComp
                icons={icons}
                localQrData={localQrData}
                setLocalQrData={setLocalQrData}
                dataKey={"business_social"}
                // onIconClick={handleSocialIconChange}
                // initialLinks={localQrData?.business_social}
                // isEditing={!!location.state?.qrData}
              />
            </AccordianComponent>
          </div>

          <div className="right">
            {
              // hasBusinessData
              true ? (
                <>
                  <ToggleButton
                    selectedOption={selectedOption}
                    onToggle={handleToggle}
                  />
                  <div className="qr-preview__layout__image">
                    <div className="Preview-layout Preview-layout--vcard">
                      <TopPreviewHeader className="topHeaderSvg" />
                      <QRPreviewBusiness localQrData={localQrData} />
                    </div>
                    <PreviewFrame className="preview-frame" />
                  </div>
                </>
              ) : (
                <img
                  src="/assets/images/phone-business.png"
                  alt="phone-business"
                />
              )
            }
          </div>
        </div>
      </div>
      <ViewPreviewModal
        setShowModalPreview={setShowModalPreview}
        showModalPreview={showModalPreview}
        localQrData={localQrData}
        type={"business_page"}
      />
    </>
  );
};

export default BUSINESS;
