// src/QrScanPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../services";
import {
  QRAPPS,
  QRBUSINESS,
  QREVENT,
  QRGALLERY,
  QRLANDING,
  QRLINK,
  QRPDF,
  QRSOCIAL,
  QRVCARD,
  QRVIDEO,
  QRYOUTUBE,
} from "./QRScanRedirectUI/AllQRType";
import {
  QRPreviewElabelsBeer,
  QRPreviewElabelsCigar,
  QRPreviewElabelsCoffee,
  QRPreviewElabelsFood,
  QRPreviewElabelsProduct,
  QRPreviewElabelsWine,
} from "./QRDetailPages/QRPreviewAll";

const ScanAndRedirectQr = () => {
  const { qrCodeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [outcomeContent, setOutcomeContent] = useState(null);
  const [error, setError] = useState(null);
  const [qrType, setQrType] = useState(null);
  // console.log("qrCodeId", qrCodeId);

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
        const os = getOperatingSystem();
        let dataToSend = {
          id: qrCodeId,
          os: os,
        };

        // console.log("DATATOSEND", dataToSend);

        let res = await apis.scanQrCode(dataToSend);
        // console.log("Response Scan QR Code", res?.data?.outcome?.questions);

        if (res && res.data && res.data.outcome) {
          const outcome = res.data.outcome;
          // console.log("outcomeLog", outcome);

          if (outcome.type === "url") {
            window.location.href = outcome.field_url;
          } else {
            setOutcomeContent(outcome);
            setQrType(outcome?.type);
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

  // console.log("outcomeContent", outcomeContent);

  useEffect(() => {
    // console.log("qrType", qrType);
  }, [qrType]);

  const renderContentByType = () => {
    if (qrType === "elabels") {
      const products = ["wine", "beer", "cigars", "coffee", "food", "product"];

      const matchedProduct = products.find(
        (product) => outcomeContent[product] === "true"
      );
      // console.log("matchedProduct", matchedProduct);

      switch (matchedProduct) {
        case "wine":
          return (
            <QRPreviewElabelsWine
              localQrData={outcomeContent}
              className={"ScanPageClass"}
              showReview
            />
          );
        case "beer":
          return (
            <QRPreviewElabelsBeer
              localQrData={outcomeContent}
              className={"ScanPageClass"}
              showReview
            />
          );
        case "cigars":
          return (
            <QRPreviewElabelsCigar
              localQrData={outcomeContent}
              className={"ScanPageClass"}
              showReview
            />
          );
        case "coffee":
          return (
            <QRPreviewElabelsCoffee
              localQrData={outcomeContent}
              className={"ScanPageClass"}
              showReview
            />
          );
        case "food":
          return (
            <QRPreviewElabelsFood
              localQrData={outcomeContent}
              className={"ScanPageClass"}
              showReview
            />
          );
        case "product":
          return (
            <QRPreviewElabelsProduct
              localQrData={outcomeContent}
              className={"ScanPageClass"}
              showReview
            />
          );
        default:
          return <div>No product selected</div>;
      }
    }

    switch (qrType) {
      case "youtube":
        return <QRYOUTUBE qrContent={outcomeContent} />;
      case "pdf":
        return <QRPDF qrContent={outcomeContent} />;
      case "video":
        return <QRVIDEO qrContent={outcomeContent} />;
      case "vcard":
        return <QRVCARD qrContent={outcomeContent} />;
      case "business_page":
        return <QRBUSINESS qrContent={outcomeContent} />;
      case "social_media":
        return <QRSOCIAL qrContent={outcomeContent} />;
      case "apps":
        return <QRAPPS qrContent={outcomeContent} />;
      case "links":
        return <QRLINK qrContent={outcomeContent} />;
      case "image_gallery":
        return <QRGALLERY qrContent={outcomeContent} />;
      case "landing":
        return <QRLANDING qrContent={outcomeContent} />;
      case "events":
        return <QREVENT qrContent={outcomeContent} />;
      case "elabels":
        return "ELABELS TESTTTTTTTT";
      default:
        return <div>Not Found</div>;
    }
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
        <>{renderContentByType()}</>
      ) : (
        <div>Redirecting...</div>
      )}
    </>
  );
};

export default ScanAndRedirectQr;
