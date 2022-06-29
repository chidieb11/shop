import React from "react";

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {["User Login", "Shipping Address",'Payment Method',]}
    </div>
  );
};

export default CheckoutWizard;
