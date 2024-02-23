import React, { useState } from "react";
import StepProgress from "./StepProgress/StepProgress";
import Cart from "./Cart/Cart";
import ProgressControl from "./ProgressControl/ProgressControl";

export default function Main() {
  const [step, setStep] = useState(1);

  // const handleStep = (onStepChange) => {
  //   setStep(step + onStepChange);
  // };
  return (
    <main class="site-main">
      <div class="main-container">
        <StepProgress step={step} />
        <Cart />
        <ProgressControl step={step} setStep={setStep} />
      </div>
    </main>
  );
}
