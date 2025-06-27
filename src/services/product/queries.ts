import { useQuery } from "@tanstack/react-query";
import { GetAllProductData, GetSingleProductData} from "../AllApi";
import { productType } from "./types";


export const useGetSingleProductData = (id: string) => {
    return useQuery<productType>({
        queryKey: ["product", id],
        queryFn: async() => {
            const response = await GetSingleProductData(id)
            return response.data as productType
        },
        staleTime: 1000 * 60 * 5
    })
}

export const useGetAllProductData = () => {
    return useQuery<productType[]>({
        queryKey: ["product"],
        queryFn: async() => {
            const response = await GetAllProductData("")
            return response.data as productType[]
        },
        staleTime: 1000 * 60 * 5
    })
}   