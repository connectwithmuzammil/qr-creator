import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Loading spinner icon
import { useNavigate } from "react-router-dom";

function BottomWrapperStages({
  currentStage,
  onNextClick,
  onCancelClick,
  showNextButton,
}) {
  const stages = [
    { step: 1, label: "Select QR code" },
    { step: 2, label: "Add content" },
    { step: 3, label: "Customize design" },
  ];

  const isLastStage = currentStage === stages.length;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleNextClick = () => {
    if (isLastStage) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/pricing");
      }, 4000);
    } else {
      // Go to the next stage
      onNextClick();
    }
  };
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
