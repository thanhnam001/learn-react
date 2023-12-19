import { useState } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";

const InputOTP = (props) => {
  const [otp, setOtp] = useState("");
  const handleInputOTP = (otp) => {
    setOtp(otp);
    props.setUserOTP(otp);
  };
  const handleConfirmOTP = () => {
    props.handleSubmitOTP();
  };
  return (
    <div className="otp-input-container">
      <div className="title">Input security OTP</div>
      <OtpInput
        value={otp}
        onChange={handleInputOTP}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={"input-custom"}
      />
      <CountDown setIsDisable={props.setIsDisable}/>
      <div className="action">
        <button className="clear" onClick={() => setOtp("")}>
          Clear
        </button>
        <button
          className="submit"
          disabled={props.isDisable}
          onClick={() => {
            handleConfirmOTP();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
