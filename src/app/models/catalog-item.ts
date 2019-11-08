export interface CatalogItem {
    id?:string;
    name:string;
    price:number;
    quantity:number;
    manufacturingDate:Date;
    reorderLevel:number;
    imageUrl?:string;
    vendors?:Vendor[];
}
export interface Vendor {
    name:string;
    contactNo:string;
    address:string;
}
 