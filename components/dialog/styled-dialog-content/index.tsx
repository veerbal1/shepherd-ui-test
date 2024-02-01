'use client';

import { useState } from 'react';
import DialogLeftSection from './left-section';
import DialogRightSection from './right-section';

function StyledDialogContent() {
  const [currentStage, setCurrentStage] = useState(1);
  const incrementState = () => {
    setCurrentStage((prevState) => {
      if (prevState <= 5) return prevState + 1;
      return prevState;
    });
  };

  const decrementState = () => {
    setCurrentStage((prevState) => {
      if (prevState > 1) return prevState - 1;
      return prevState;
    });
  };

  const setStates = (state: number) => {
    if (state < 1 || state > 6) return;
    setCurrentStage(state);
  };

  return (
    <div className="model flex w-full">
      <DialogLeftSection progress={currentStage} setStates={setStates} />
      <DialogRightSection
        incrementState={incrementState}
        decrementState={decrementState}
        currentStage={currentStage}
      />
    </div>
  );
}

export default StyledDialogContent;
