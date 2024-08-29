import React, { useRef, useEffect } from "react";
import QRCode from "qrcode";

const QRMobileFrame = ({
  value,
  dotColor,
  bgColor,
  cornerColor,
  cornerDotColor,
  frameColor,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCodeOptions = {
          color: {
            dark: dotColor, // QR code dots color
            light: bgColor, // QR code background color
          },
          margin: 1,
        };

        const qrCodeDataUrl = await QRCode.toDataURL(value, qrCodeOptions);
        const canvas = canvasRef.current;

        // Ensure that the canvas is available
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          console.error("Unable to get the canvas context");
          return;
        }

        const img = new Image();
        img.onload = () => {
          // Draw the QR code on the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Add additional drawing logic for frame color or corner style if needed
        };
        img.src = qrCodeDataUrl;
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    generateQRCode();
  }, [value, dotColor, bgColor, cornerColor, cornerDotColor]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default QRMobileFrame;
