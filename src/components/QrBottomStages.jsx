import React from 'react';
import { MdChevronRight } from 'react-icons/md';

function BottomWrapperStages({ currentStage, onNextClick, onCancelClick }) {
  const stages = [
    { step: 1, label: 'Select QR code' },
    { step: 2, label: 'Add content' },
    { step: 3, label: 'Customize design' },
  ];

  return (
    <div className="bottom-wrapper-stages">
      <button className="cancel" onClick={onCancelClick}>Cancel</button>
      <div className="stages-con">
        {stages.map((stage) => (
          <div key={stage.step} className={`select-qr ${currentStage === stage.step ? 'active' : ''}`}>
            <div className="wrap">
              <h5 className={currentStage >= stage.step ? 'active' : ''}>{stage.step}</h5>
              <p className={currentStage >= stage.step ? 'active' : ''}>{stage.label}</p>
            </div>
            {stage.step !== stages.length && <MdChevronRight />}
          </div>
        ))}
      </div>
      <div className="btn-next">
        <button className="next" onClick={onNextClick}>Next</button>
        <MdChevronRight />
      </div>
    </div>
  );
}

export default BottomWrapperStages;
