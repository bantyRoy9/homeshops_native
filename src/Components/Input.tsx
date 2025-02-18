import { memo } from "react";

const Input = (props: any) => {
  return (
    <>
      {/* Global input with focus outline & shadow */}
      <div className="main-box1 group relative" key={props.key}>
        {props.label && (<label htmlFor={`${props.id}`} className={`label-box1  ${props.error && "label-error"} text-nowrap`}   >   {props.label}   {props?.isRequired && (<span className="text-rose-400 pl-0.5">* </span>)} </label>)}
        <div className="input-main1">
          <input max={props.max} min={props.min} onBlur={props.onBlur} onWheel={(e) => e.currentTarget.blur()} onKeyPress={props.onKeyPress} autoComplete="off" id={`${props.id}`} className={`${props.classNames} input-box1 peer ${props.btntitle ? "pr-[6.4rem]" : ""} ${props.error && "input-error"} ${props.disabled === true ? "bg-gray-100/80 cursor-not-allowed text-[#999999]" : ""}`} {...props} />
          {(props.suficon && !props.handleSufIcon) && <span className="suf-box1">{props.suficon}</span>}
          {(props.suficon && props.handleSufIcon && props.value.length > 0) && <span className="suf-box1 cursor-pointer color-red" onMouseDown={props.handleSufIcon}>{props.suficon}</span>}
          {(props.suftext) && <span className={`suf-box1 ${props.error && 'label-error'} ${props.disabled ? "text-[#999999]" : ""}`}>{props.suftext}</span>}
          {props.btntitle && (<button name={props.btntitle} disabled={props.btnDisabled} className={`suf-box1 btn btn-xs-primary  ${props.error ? "bg-gradient-to-tr from-rose-400 to-rose-400/80 border-none" : ""}`} onClick={props.onBtnTitleClick} > {props.btntitle} </button>)}
          {props.max && props.value && (<span className="absolute -bottom-5 right-0 para-xs text-gray-500" style={{ fontSize: '0.675rem' }}>Max: {props.max}</span>)}
        </div>
        {props.error ? (<span className="label-box1 label-error" >{props.error} </span>)
          :
          <span className={`helper-box1`}>{props.helpertext && props.helpertext}</span>}
      </div>
    </>
  );
};

export default memo(Input)