import React from "react";

export default function ProgressControl() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <object data="/icons/right-arrow.svg" className="cursor-point" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <object data="/icons/left-arrow.svg" className="cursor-point" />
          上一步
        </button>
        <button className="next">
          下一步
          <object data="/icons/right-arrow.svg" className="cursor-point" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <object data="/icons/left-arrow.svg" className="cursor-point" />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  );
}
