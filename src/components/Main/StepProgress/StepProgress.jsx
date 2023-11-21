import React from 'react'
import Step1 from './Step/Step1'
import Step2 from './Step/Step2'
import Step3 from './Step/Step3'
import '../../../styles/register.scss'

export default function StepProgress(){
  return(
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={1}
      data-total-price={0}
    >
      {/* register-title */}
      <h2 className="register-title col col-12">結帳</h2>
      {/* register-progress */}
      <section className="progress-container col col-12">
        <span className="progress-group" data-phase="address">
          <span className="progress-icon">
            <span className="text">1</span>
          </span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className="progress-bar" data-order={1} />
        <span className="progress-group" data-phase="shipping">
          <span className="progress-icon">
            <span className="text">2</span>
          </span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className="progress-bar" data-order={2} />
        <span className="progress-group" data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">3</span>
          </span>
          <span className="progress-label">付款資訊</span>
        </span>
      </section>
      {/* register-form */}
      <section className="form-container col col-12">
        <Step1/>
        <Step2/>
        <Step3/>
      </section>
    </section>
  )
}