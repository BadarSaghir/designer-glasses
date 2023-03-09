
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
    advertisment:Advertisment;

}

export interface Advertisment{
    title:string,
    link:string,
    tryOn:boolean,
    type:string
}

