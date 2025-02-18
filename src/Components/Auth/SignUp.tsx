import { AxiosResponse } from "axios";

export type signUPDetails = {
  name: string, label: string, value?: string, error?: string | null, type: any, isMobileValid?: boolean, countrycode?: string, disabled?: boolean
};

const SignUp = () => {

  return (
    <>
      <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-custom-primary-default/40 to-white select-none`}>
        <img src={require('../../assests/img/Logo/Terranxt_Logo_HD1.png')} className="w-64" />
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 z-50">
          <div>
          
          </div>
        </div>
        <div className="para para-xs z-50">© All Rights Reserved 2024. Created with <span className="text-rose-400">❤</span> by <a href="https://terranxt.com/">Team Terranxt</a></div>
        <img src={require('../../assests/img/Dashboard/FP_Image.png')} className="hidden md:block absolute w-3/12 bottom-0 right-0" />
      </div>
    </>
  );
};
export default SignUp
