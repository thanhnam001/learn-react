import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss";

const OTP = () => {
  const [genOTP, setGenOTP] = useState("");
  const [userOTP, setUserOTP] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const handleSubmitOTP = () => {
    alert(genOTP === userOTP);
  };
  return (
    <div className="otp-parent-container">
      <GenerateOTP setGenOTP={setGenOTP} />
      <InputOTP
        setUserOTP={setUserOTP}
        handleSubmitOTP={handleSubmitOTP}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
    </div>
  );
};

export default OTP;
