import { DrawerProps } from "Utils/Const";
import { IconClose } from "../Assests/Icons";
import React from "react";
const Drawer: React.FC<DrawerProps> = ({ position,headerName, isOpen, onClose, children }) => {
    const drawerClasses = `fixed z-40 w-[22rem] overflow-y-auto transition-transform bg-gray-100
    ${position === "top" && !isOpen && "top-0 left-0 w-full h-80 translate-y-full"}
    ${position === "right" && !isOpen && "top-0 right-0 h-screen w-80 translate-x-full"}
    ${position === "bottom" && !isOpen && "bottom-0 left-0 w-full h-80 translate-y-full"}
    ${position === "left" && !isOpen && "top-0 left-0 h-screen w-80 -translate-x-full"}
    ${position === "top" && isOpen && "translate-y-0"}
    ${position === "right" && isOpen && "translate-x-0 right-0 h-full"}
    ${position === "bottom" && isOpen && "translate-y-0"}
    ${position === "left" && isOpen && "-translate-x-0"}`
    return (
        <div className={isOpen ? "modal-overlay modal-overlay--fade-in" : ""}>
            <div className={drawerClasses} role="dialog" aria-labelledby="drawer-label" aria-hidden={!isOpen} tabIndex={-1}>
                <div className="bg-white w-full mb-4 relative flex items-center p-4">
                    <h2 id="drawer-label" className="inline-flex items-center  text-[1rem] font-semibold text-black">{headerName}</h2>
                    <button type="button" onClick={onClose} className="absolute right-0 text-black bg-transparent rounded-lg text-[1rem] w-10 h-10">
                        <IconClose />
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
export default Drawer