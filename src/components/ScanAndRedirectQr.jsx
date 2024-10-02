// src/QrScanPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../services";

const ScanAndRedirectQr = () => {
  const { qrCodeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [outcomeContent, setOutcomeContent] = useState(null); // Store content outcome
  const [error, setError] = useState(null); // Store error if any

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

  const isValidUrl = (outcome) => {
    return outcome.startsWith("http://") || outcome.startsWith("https://");
  };

  useEffect(() => {
    const trackQrScan = async () => {
      try {
        const os = getOperatingSystem();
        let dataToSend = {
          id: qrCodeId,
          os: os,
        };

        console.log("DATATOSEND", dataToSend);

        let res = await apis.scanQrCode(dataToSend);
        console.log("Response Scan QR Code", res);

        if (res?.data?.outcome) {
          const outcome = res.data.outcome;

          if (isValidUrl(outcome)) {
            // Redirect if outcome is a valid URL
            window.location.href = outcome;
          } else {
            // Store content if it's not a URL
            setOutcomeContent(outcome);
          }
        } else {
          console.error("Invalid response data", res);
          setError("Invalid response data");
        }
      } catch (error) {
        console.error("Failed to track QR Code scan", error);
        setError("Failed to track QR Code scan");
      } finally {
        setLoading(false);
      }
    };

    trackQrScan();
  }, [qrCodeId]);

  const renderTableContent = () => {
    // Parse and display the outcome content (string with key-value pairs)
    const contentParts = outcomeContent.split(", ");
    return (
      <table className="content-table-scan">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {contentParts.map((part, index) => {
            const [key, value] = part.split(": ");
            return (
              <tr key={index}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loaderr" />
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : outcomeContent ? (
        <div className="table-wrapper">{renderTableContent()}</div> // Display content in table
      ) : (
        <div>Redirecting...</div>
      )}
    </>
  );
};

export default ScanAndRedirectQr;
