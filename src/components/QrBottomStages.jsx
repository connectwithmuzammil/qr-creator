import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Loading spinner icon
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import apis from "../services";
import { toast } from "react-toastify";
import axios from "axios";

function BottomWrapperStages({
  currentStage,
  onNextClick,
  onCancelClick,
  showNextButton,
  qrData,
  getPayload,
}) {
  const stages = [
    { step: 1, label: "Select QR code" },
    { step: 2, label: "Add content" },
    { step: 3, label: "Customize design" },
  ];

  // const payload = typeof getPayload === "function" ? getPayload() : {};

  // console.log("payloadBefore", getPayload);

  const isLastStage = currentStage === stages.length;
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //QR CODE API CALL
  const { mutate: mutateQrCode, isPending: isLoading } = useMutation({
    mutationFn: apis.generateQrCode,
    onError: function ({ message }) {
      toast.error(message);
    },
    onSuccess: ({ data: generateQr, status }) => {
      console.log("QR code generated successfully", generateQr);
      toast.success("QR code generated successfully");
      // navigate("/design-page", { state: { qrData } });
    },
  });

  const generateQrCode = async (data) => {
    console.log("dataPaylod", data);
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "https://qrgenarator.envobyte.dev/api/generate",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response", response);
    let res = response.data;
    console.log("resres", res);
    navigate("/qr-image", { state: { res } });

    // return response.data;
  };
  const handleNextClick = async () => {
    if (isLastStage) {
      // const payload = getPayload;
      // console.log("payloadpayload", getPayload);
      const payloadStatic = {
        qr_name: "test",
        field_url: "https://www.qrcreator.com/",
        style: {
          backgroundColor: "#FFFFFF",
          dotsStyle: "square",
          dotsColor: "#000000",
          cornerStyle: "rounded-dot",
          cornerBackgroundColor: "#000000",
          cornerBorderColor: "#000000",
          frameStyle: "none",
          frameColor: "#404040",
          frameText: "SCAN ME!",
          frameTextColor: "#FFFFFF",
        },
      };
      console.log("payloadStaticpayloadStatic", payloadStatic);
      try {
        const imagePath = await generateQrCode(payloadStatic);
        console.log("QR code generated successfully", imagePath);

        toast.success("QR code generated successfully");
      } catch (error) {
        console.error(
          "Error generating QR code:",
          error.response || error.message
        );
        toast.error(error.message || "An error occurred");
      }
      // mutateQrCode(payloadStatic);
    } else {
      onNextClick();
    }
  };

  // const handleNextClick = () => {
  //   if (isLastStage) {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       navigate("/pricing");
  //     }, 4000);
  //   } else {
  //     // Go to the next stage
  //     onNextClick();
  //   }
  // };
  return (
    <div className="bottom-wrapper-stages">
      <button className="cancel" onClick={onCancelClick}>
        {currentStage === 1 ? "Cancel" : "Back"}
      </button>
      <div className="stages-con">
        {stages.map((stage) => (
          <div
            key={stage.step}
            className={`select-qr ${
              currentStage === stage.step ? "active" : ""
            }`}
          >
            <div className="wrap">
              <h5 className={currentStage >= stage.step ? "active" : ""}>
                {stage.step}
              </h5>
              <p className={currentStage >= stage.step ? "active" : ""}>
                {stage.label}
              </p>
            </div>
            {stage.step !== stages.length && <MdChevronRight />}
          </div>
        ))}
      </div>
      {/* {showNextButton && (
        <div className="btn-next">
          <button
            className="next"
            onClick={handleNextClick}
            disabled={isLoading}
          >
            {isLastStage ? "Finish" : "Next"}
            {isLoading ? "Loading..." : isLastStage ? "Finish" : "Next"}
          </button>
          <MdChevronRight />
        </div>
      )} */}

      {/*  */}
      {showNextButton && (
        <div className="btn-next">
          <button
            className="next"
            onClick={handleNextClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-content">
                {/* <AiOutlineLoading3Quarters className="loading-spinner" /> */}
                <div className="loader"></div>
                <span>Loading...</span>
              </div>
            ) : isLastStage ? (
              "Finish"
            ) : (
              "Next"
            )}
          </button>
          {!isLoading && <MdChevronRight />}
        </div>
      )}
    </div>
  );
}

export default BottomWrapperStages;
