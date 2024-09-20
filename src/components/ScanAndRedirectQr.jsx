// src/QrScanPage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import apis from "../services";

const ScanAndRedirectQr = () => {
  const { qrCodeId } = useParams();
  const [loading, setLoading] = useState(true);

  // Function to detect the operating system
  const getOperatingSystem = () => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;

    if (platform.startsWith("Win")) return "Windows";
    if (platform.startsWith("Mac")) return "MacOS";
    if (platform.startsWith("Linux")) return "Linux";
    if (/Android/.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/.test(userAgent)) return "iOS";
    return "Unknown OS";
  };

  useEffect(() => {
    const trackQrScan = async () => {
      try {
        // Send POST request to track the scan
        // let res = await axios.post(
        //   "https://qrgenarator.envobyte.dev/api/qr_scan",
        //   {
        //     id: qrCodeId,
        //   }
        // );
        const os = getOperatingSystem();

        let dataToSend = {
          id: qrCodeId,
          os: os,
        };
        console.log("DATATOSEND", dataToSend);
        let res = await apis.scanQrCode(dataToSend);
        console.log("response Scan qr code", res);

        if (res?.data?.outcome) {
            window.location.href = res.data.outcome;
        } else {
          console.error("Invalid response data", res);
        }
      } catch (error) {
        console.error("Failed to track QR Code scan", error);
        setLoading(false);
      }
    };

    trackQrScan();
  }, [qrCodeId]);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loaderr" />
        </div>
      ) : (
        <div>Redirecting...</div>
      )}
    </>
  );
};

export default ScanAndRedirectQr;
