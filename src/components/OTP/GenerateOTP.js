import { useState } from "react";
let random = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
const GenerateOTP = (props) => {
  const [currentOTP, setCurrentOTP] = useState("");

  return (
    <div className="generate-otp-container">
      <button
        onClick={() => {
          const otp = random().toString();
          setCurrentOTP(otp);
          props.setGenOTP(otp);
        }}
      >
        Generate OTP
      </button>
      <div>Your OTP here: {currentOTP}</div>
    </div>
  );
};

export default GenerateOTP;
