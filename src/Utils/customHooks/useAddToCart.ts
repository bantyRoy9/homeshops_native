import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/Store';
import { addItem } from '../../Redux/Store.Reducers';
import { getProjects } from './../../Redux/Store.Actions';
import { IProduct } from '../../Redux/type';

export const useAddToCart = () => {
    const dispatch = useAppDispatch();
    const { addtocard, products } = useAppSelector(state => state);
    useEffect(()=>{ 
    dispatch(getProjects());
    }, [dispatch]);
    const addProduct = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,type: -1 | 1, product: IProduct) => {
        e.stopPropagation();
        dispatch(addItem({ product, type }));
    };
    const calculateTotalMRP = (Products: any[]) => {
        let totalMRP = 0 as number;
        for (const productId in Products) {
            totalMRP += Products[productId].reduce((total: number, group: any) => total + parseFloat(group.mrp), 0);
        }
        return totalMRP;
    };
    const totalProduct = () => Object.values(addtocard).flat().length;
    return { products, addtocard, addProduct, calculateTotalMRP, totalProduct };
};