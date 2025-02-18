
import { IconCivilMMSDesign } from "Assests/Icons";
import Button from "../Buttons/Button";
import Input from "../Input";
import React, { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import SignInOTP from "./OTPModal/SignInOTP";
export type formDetails = { name: string; value?: string; error?: string | null; type: any;id:string };

const Login = () => {
  const dispatch = useAppDispatch(), Navigate = useNavigate(), url = useLocation(), id = useId();
  const [show, setShow] = useState(true);
  const [showForgetPass, setShowForgetPass] = useState(false);
  const toastId = useRef<any | null>(null);
  const {  } = useAppSelector((state) => state);
  const [formDetails, setFormDetails] = useState<formDetails[]>([{ name: "email", value: "", error: "", type: "text",id:"signInEmail" }, { name: "password", value: "", error: "", type: "password",id:"signInPassword" }]);
  const [passwordHide,setPasswordHide] = useState<boolean>(false)




  
  const handlePasswordView = (e:any)=>{
    setPasswordHide(true)
  }

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-custom-primary-default/40 to-white transition-all ${passwordHide?"cursor-pointer select-none":"cursor-default"}`}>
      
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 w-[28rem] justify-center z-50">
        {/* <Modal4 msg="Changes saved" desc="Your product changes have been saved."/> */}
        {show && (
          <div className={`${showForgetPass ? "hidden" : "w-full"}`}>
            <div className="flex flex-col justify-center p-8 md:p-14 ">
              <h3 className="heading heading-lg text-center">pvNXT EPC Portal</h3>
              <span className="para para-sm text-center">Welcome Back! Please enter your details</span>
              <form>
                {formDetails.map((el, idx) => (
                  <div className="grid grid-cols-1 gap-4" key={idx + "login"}>
                    {el.type==="password"?<Input /> :
                    <Input id={el.id} autoComplete="on" name={el.name} label={el.name} type={el.type} value={el.value!} error={el.error} isrequired={true} />}
                    {/* <Input name={el.name} label={el.name} onChange={(e) => handleChange(e, idx)} type={el.type} value={el.value!} error={el.error} isrequired={true} /> */}
                  </div>
                ))}
                <span className="para para-xs mr-2 float-right cursor-pointer" > Forgot password? </span>
                <Button className="btn btn-md-primary w-full" type="submit" id="btnsignin" name="Sign in" />
              </form>
              <Button className="btn btn-md-outlineprimary w-full mt-6" id="butotp" name="Sign in with OTP" />
              <div className="mt-14 text-center">
                <span className="para-sm">Don't have an account? </span>
                <Link className="para-md underline " to="signup" data-bs-toggle="tooltip" title="Create new account" > Sign up for free</Link>
              </div>
            </div>
          </div>
        )}
        {!show && (<SignInOTP text={formDetails[0].value!} handleShow={() => setShow(!show)} />)}
      </div>
      <div className="para para-xs z-50">© All Rights Reserved 2024. Created with <span className="text-rose-400">❤</span> by <a href="https://terranxt.com/">Team Terranxt</a></div>
    </div>
  );
};

export default Login;