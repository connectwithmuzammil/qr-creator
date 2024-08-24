import React from "react";
import { BottomWrapperStages, Header } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

const QRDesign = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate(`/qr-editor/${type}`);
  };
  return (
    <>
      <Header />
      <div>QRDesign</div>

      <BottomWrapperStages
        currentStage={3}
        onCancelClick={handleCancelClick}
        showNextButton={true}
      />
    </>
  );
};

export default QRDesign;
