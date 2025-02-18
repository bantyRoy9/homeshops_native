import { FormEvent, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Timer } from "..";
// import { Button } from "../../../Components/AllButton/AllButtons.tsx";
// import Toast from "../../../Components/ErrorBoundry/Toast";
// import { baseURL, requestUrl } from "../../../Utils/baseUrls";
// import { OTPModalProps } from "./type";
import { FORMTOASTERRID, OTP_COUNT, OTP_COUNTER } from "../../../Utils/Const";
import Button from "Components/Buttons/Button";


const OTPModal: React.FC<any> = ({ text, setHide, setVerified, verified, setToggle,toggle}) => {
  const timeRef = useRef<HTMLAnchorElement>(null);
  const [sendOTP, setOtpSend] = useState<string>("");
  const [numbercount, setNumberCount] = useState(0);
  const [countdown, setCountdown] = useState(OTP_COUNTER);
  const specialChars = /[@]/;
  const toastIdModal = useRef<any | null>(null);


  const handleClose = () =>{
    setToggle({ ...toggle, emailVerify: false });  
      setHide(false);
  }



 

 

  const handleOtpInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const inputs = [
      document.getElementById("first") as HTMLInputElement,
      document.getElementById("second") as HTMLInputElement,
      document.getElementById("third") as HTMLInputElement,
      document.getElementById("fourth") as HTMLInputElement,
    ];
  
    const target = event.target as HTMLInputElement;
    const key = event.key;
    const currentIndex = inputs.indexOf(target);

    if (!key.match(/^[0-9]$/) && key !== "Backspace") {
      event.preventDefault();
      return;
    }
  
    // Allow only one character in each input
    if (target.value.length > 1) {
      target.value = target.value.charAt(0);
    }
  
    if (key === "Backspace") {
      // Move to previous input if Backspace is pressed and the current input is empty
      if (target.value === "" && currentIndex > 0) {
        inputs[currentIndex - 1].focus();
      }
    } else if (key.match(/^[0-9]$/)) {
      // Move to the next input when a digit is entered
      target.value = key; // Set the current input value to the entered key
      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      }
      event.preventDefault(); // Prevent the default behavior of typing the digit again
    }
  };
  


  return (
    <div className={`flex flex-col justify-center ${verified.email?"p-0 md:p-0":"p-8 md:p-14"} `}>
        <span className="heading heading-lg text-center">Email Verification</span>
        <span className="para para-md text-center">We have sent a code to your email {sendOTP}</span>
        <div>
          <div className="flex flex-row items-center justify-between gap-2 mx-auto w-full max-w-full" id="otp" data-bs-toggle="tooltip" title="Enter otp here">
            <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="first" name="first" onKeyDown={handleOtpInput} />
            <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="second" name="second" onKeyDown={handleOtpInput} />
            <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="third" name="third" onKeyDown={handleOtpInput} />
            <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="fourth" name="fourth" onKeyDown={handleOtpInput} />
          </div>
          <div className="flex gap-4 max-sm:flex-col mt-8">
            <Button className="btn btn-md-outlineprimary w-full" onClick={handleClose}  name="Back" />
            <Button className="btn btn-md-primary w-full" type="submit" id="btnsignin" name="Verify Email" onClick={(e) => {}} />
          </div>
        </div>
        {/* <Timer1/> */}
         {/* <Timer handleIncrement={handleIncrement} resendcount={numbercount} setNumberCount={setNumberCount} timeRef={timeRef} countdown={countdown} setCountdown={setCountdown} handleClose={handleClose}/> */}
      </div>
    
  );
};

export default OTPModal;
