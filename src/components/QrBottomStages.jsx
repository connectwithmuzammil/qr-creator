import React from "react";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import apis from "../services";
import { toast } from "react-toastify";

function BottomWrapperStages({
  currentStage,
  onNextClick,
  onCancelClick,
  showNextButton,
  generateQrPayload,
}) {
  const stages = [
    { step: 1, label: "Select QR code" },
    { step: 2, label: "Add content" },
    { step: 3, label: "Customize design" },
  ];

  const isLastStage = currentStage === stages.length;
  const navigate = useNavigate();

  console.log("qrDataqrData", generateQrPayload);

  //QR CODE API CALL
  const { mutate: mutateQrCode, isPending: isLoading } = useMutation({
    mutationFn: apis.generateQrCode,
    onError: function ({ message }) {
      toast.error(message);
    },
    onSuccess: ({ data: generateQr, status }) => {
      // console.log("QR code generated successfully", generateQr);
      toast.success("QR code generated successfully");
      // navigate("/pricing");
      navigate("/qr-image", { state: { generateQr } });
    },
  });

  const handleNextClick = async () => {
    if (isLastStage) {
      const formData = new FormData();

      // Handle the image separately if it's base64
      if (generateQrPayload?.landing_logo) {
        // Convert base64 to a Blob
        const base64Data = generateQrPayload.landing_logo.split(",")[1];
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        // Determine MIME type from base64 string
        const mimeType = generateQrPayload.landing_logo
          .split(";")[0]
          .split(":")[1];
        const blob = new Blob([byteArray], { type: mimeType });

        // Derive file extension from MIME type
        let extension = "png";
        if (mimeType.includes("jpeg")) {
          extension = "jpg";
        } else if (mimeType.includes("svg")) {
          extension = "svg";
        } else if (mimeType.includes("gif")) {
          extension = "gif";
        } else if (mimeType.includes("webp")) {
          extension = "webp";
        }

        formData.append("landing_logo", blob, `landing_logo.${extension}`);
      }
      
      // Flatten and append existing payload data except 'landing_logo'
      Object.keys(generateQrPayload).forEach((key) => {
        if (key === "style") {
          // Handle the nested style object separately
          Object.keys(generateQrPayload.style).forEach((styleKey) => {
            formData.append(
              `style[${styleKey}]`,
              generateQrPayload.style[styleKey]
            );
          });
        } else if (key === "color") {
          // Handle the nested color object separately
          Object.keys(generateQrPayload.color).forEach((colorKey) => {
            formData.append(
              `color[${colorKey}]`,
              generateQrPayload.color[colorKey]
            );
          });
        }else if (key === "social") {
          // Handle the social object separately
          Object.keys(generateQrPayload.social).forEach((socialKey) => {
            formData.append(`social[${socialKey}]`, generateQrPayload.social[socialKey]);
          });
        }  
        else if (key === "media_social") {
          // Handle the social object separately
          Object.keys(generateQrPayload.media_social).forEach((media_socialKey) => {
            formData.append(`media_social[${media_socialKey}]`, generateQrPayload.media_social[media_socialKey]);
          });
        }
        else if (key !== "landing_logo") {
          // Skip 'landing_logo' since it's already handled as a blob
          formData.append(key, generateQrPayload[key]);
        }
      });

      if (generateQrPayload?.pdf_file) {
        formData.append("pdf_file", generateQrPayload.pdf_file);
      }

      console.log("formData", formData);
      mutateQrCode(formData);

      // mutateQrCode(generateQrPayload);
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
