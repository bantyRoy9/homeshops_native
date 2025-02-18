import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { getProjects } from "./Store.Actions";
import { initialStateTy } from "./Store.Reducers";
import { TProducts } from "./type";

const buildEPCExtraReducers = (builder: ActionReducerMapBuilder<initialStateTy>) => {
    builder
        .addCase(getProjects.fulfilled, (state, { payload }: PayloadAction<TProducts>) => {
            state.products = payload;
        })
        .addCase(getProjects.pending, (state) => {
            state.products = [];
        })
        .addCase(getProjects.rejected, (state) => {
            state.products = [];
        })
    };
export default buildEPCExtraReducers