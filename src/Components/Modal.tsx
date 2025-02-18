import { IconClose } from "../Assests/Icons";
import { memo } from "react";
import { FormModalPropsType } from "../Utils/Const";

const FormModal = ({ headerTitle, modalSize, btnTitle, onSubmit, children, fontWeight, closeModal, name, subHeaderTitle, className, overflow, btnVisible = true }: FormModalPropsType) => {
  return (
    <>
      <div className={`modal-backdrop1 ${className}`}>
        <div className={`main-modal2 ${modalSize + "-modal"}`}>
          <div className="modal-header1">
            <h3 className={`heading-sm-semibold flex-1 ${fontWeight}`}>
              {/* {title} */}
            </h3>
            <button onClick={() => closeModal(name)}>
              <IconClose />
            </button>
          </div>
          <form className="modal-body2 pb-0" onSubmit={onSubmit}>
            <div className="pb-6" style={{ maxHeight: '78vh', overflow: 'auto' }}>
              {children}
            </div>
            {btnVisible && <div className="modal-footer1">
               <button className="btn btn-sm-primary" type="submit">Submit</button>
            </div>}
          </form>
        </div>
      </div>
    </>
  );
};
export default memo(FormModal);
