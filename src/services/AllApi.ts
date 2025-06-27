import { CommonApi } from "./CommonApi";

// Base url

export const Base_Url = "http://127.0.0.1:8000/"


export const GetAllProductData = async (data: any) =>{
    return await CommonApi("GET",`${Base_Url}/products/`,data,"")
}

export const GetSingleProductData = async (id: any) =>{
    const params = new URLSearchParams({id: id});
    return await CommonApi("GET",`${Base_Url}/products/?{params.toString()}`,"",{})
}