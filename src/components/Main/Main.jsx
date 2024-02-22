import React from "react";
import StepProgress from "./StepProgress/StepProgress";
import Cart from "./Cart/Cart";
import ProgressControl from "./ProgressControl/ProgressControl";

export default function Main() {
  return (
    <main class="site-main">
      <div class="main-container">
        <StepProgress />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}
