export interface images{

    id : number;
    image : string;
    product : number

}

export interface category{

    id : number;
    category : string

}

export interface material{

    id : number;
    material : string;

}


export interface productType{
    id : number;
    product_name : string;
    price : number;
    description : string;
    if_offer : boolean;
    is_stock : boolean;
    offer_price : number;
    category : category;
    material : material;
    images : images[];

}