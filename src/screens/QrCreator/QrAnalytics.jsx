import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import { DatePickerInput, LineChartComp, Sidebar } from "../../components";

const QrAnalytics = () => {
  return (
    <div className="qrAnalytics">
      <div className="userDashboard">
        <Sidebar />
        <div className="content-page">
          <div className="top">
            <h1>QR code analytics</h1>
          </div>
          <div className="bottom">
            <div className="period-con">
              <div className="wrap">
                <p>Period</p>
                <StyledEngineProvider injectFirst>
                  <DatePickerInput />
                </StyledEngineProvider>
              </div>

              <button className="export-data" disabled>
                Export data
              </button>
            </div>

            <div className="analytics-con">
              <div className="cardd">
                <div className="wrap">
                  <img src="/assets/images/icons/eye.png" alt="eye" />
                  <p>Number of QR codes</p>
                </div>
                <h3>1</h3>
              </div>
              <div className="cardd">
                <div className="wrap">
                  <img src="/assets/images/icons/eye.png" alt="eye" />
                  <p>Number of scans</p>
                </div>
                <h3>0</h3>
              </div>
              <div className="cardd">
                <div className="wrap">
                  <img src="/assets/images/icons/eye.png" alt="eye" />
                  <p>Number of unique scans</p>
                </div>
                <h3>0</h3>
              </div>
            </div>

            <div className="graph-con">
              <p>Scans activity</p>
              <StyledEngineProvider injectFirst>
                <LineChartComp />
              </StyledEngineProvider>
            </div>

            <div className="all-card-con">
              <div className="cardd">
                <p>Scans per operating system</p>
                <h4 className="stats-txt">
                  (Need more data to show statistics)
                </h4>
              </div>
              <div className="cardd">
                <p>Scans per country</p>
                <h4 className="stats-txt">
                  (Need more data to show statistics)
                </h4>
              </div>
              <div className="cardd">
                <p>Scans per city/region</p>
                <h4 className="stats-txt">
                  (Need more data to show statistics)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrAnalytics;
