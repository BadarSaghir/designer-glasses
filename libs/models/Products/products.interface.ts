
export interface ProductModel{
    id:string;
    name:string,
    prices?:string[],
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
    multifocal?:string[],
    warranties?:string[],
biofocal?:string[],
    advertisment:Advertisment;

}

export interface Advertisment{
    title:string,
    link:string,
    tryOn:boolean,
    type:string
}

