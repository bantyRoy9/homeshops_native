import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { AxiosConfig, routes } from "./../Utils/baseUrl";
import { TProducts } from "./type";

export const getCardDetails = createAsyncThunk("get/StoreCard",async()=>{
    try{
        const {data} =await axios.get("https://blinkit.com/feed/?template_version=9",{headers:{Lat:"28.6077127",Lon:"77.30915499999999",app_client:"consumer_web",platform:'desktop_web'}});
        return data;
    }catch(err){

    }
});
export const getProjects = createAsyncThunk<TProducts>("get/product",async()=>{
    try{
        const {data}:AxiosResponse<TProducts> = await AxiosConfig.get(routes.Products);
        if(!data.length) return [] as TProducts;
        return data;
    }catch(err){
        return [] as TProducts
    }
})