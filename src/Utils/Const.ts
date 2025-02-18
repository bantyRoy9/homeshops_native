import { JSX } from "react";
import { IProduct } from "Redux/type";
export const FORMTOASTERRID = 'formtoastid';
export const OTP_COUNT=60;
export const OTP_COUNTER = 1;
/********DRAWER*********/
export type DrawerPosition = "top" | "right" | "bottom" | "left";
export type DrawerProps = {
    position: DrawerPosition;
    isOpen: boolean;
    onClose: () => void;
    children: any
    headerName:string
};
export interface IProductCard {
  product: IProduct,
  width?:number,
  addProduct?:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,item:-1|1,product:IProduct)=>void,
  addtocard?: any,
  activecard?:number|null
}

export interface modalPropsTypes {
    headerTitle: String;
    modalSize: 'lgx' | 'lg' | 'md' | 'sm' | 'sm-x' | 'small';
    btnTitle: string;
    secBtnTitle?: string;
    onClick: (isSecBtn?: boolean) => void;
    onSubmit:(e:React.FormEvent) => void;
    children: JSX.Element;
    fontWeight?: string;
    closeModal: (name?: string) => void;
    name?: string;
    subHeaderTitle?: string;
    className?: string;
    overflow?:boolean
    btnVisible?:boolean
};

export interface DropModalTy{
  ModalTitle:string;
  child:JSX.Element;
  top:number;
  right:number;
}
export type modalPropsType = Omit<modalPropsTypes,"onSubmit">
export type FormModalPropsType = Omit<modalPropsTypes,"onClick">