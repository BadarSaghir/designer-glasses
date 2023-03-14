
export interface ProductModel{
    id:string;
    name:string,
    
    sku:string[];
    genders:string[];
    colors:string[];
    images:string[];
    shape:string[],
    frameType:string[]
    date:string;
    distance?:number,
    lensWidth?:number
    templatelenght?:number
    bridgeHeight?:number,
    lensHeight?:number,
    multifocal?:[],
biofocal?:[],
    pormotion?:[],
    advertisment:Advertisment;

}

export interface Advertisment{
    title:string,
    link:string,
    tryOn:boolean,
    type:string
}

