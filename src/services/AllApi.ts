import { CommonApi } from "./CommonApi";

// Base url

export const Base_Url = "http://127.0.0.1:8000/"


export const GetProductData = async (data: any) =>{
    return await CommonApi("GET",`${Base_Url}/product/`,data,"")
}