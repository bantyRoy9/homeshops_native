import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storeDetailSlice, { initialState } from "./Store.Reducers";

export const store = configureStore({
    reducer: storeDetailSlice,
    // preloadedState,
});
// store.subscribe(() => {
//     const states = store.getState();
//     saveState({ products: states.products,addtocard:states.addtocard||{},product:states.product });
// });
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
