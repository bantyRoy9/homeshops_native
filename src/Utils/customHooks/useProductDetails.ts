import { useAppSelector } from "../../Redux/Store";

export const useProductDetails = () =>{
    const product = useAppSelector(state=>state.product);
    return {product}
};