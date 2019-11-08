import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogItem } from '../models/catalog-item';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    
    // readonly API_URL:string="http://localhost:58348/api/catalog";
    readonly API_URL:string="https://hexcatalogapi.azurewebsites.net/api/catalog";

    constructor(private http: HttpClient) { }

    addProduct(formData:FormData):Observable<CatalogItem>{
        return this.http.post<CatalogItem>(`${this.API_URL}/product`, formData);
    }

    getProducts():Observable<CatalogItem[]>{
        return this.http.get<CatalogItem[]>(this.API_URL);
    }
}
