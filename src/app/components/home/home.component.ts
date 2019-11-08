import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { Observable } from 'rxjs';
import { CatalogItem } from 'src/app/models/catalog-item';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    products:Observable<CatalogItem[]>;

    constructor(private catalogSvc: CatalogService) {
        this.products=this.catalogSvc.getProducts();
     }

    ngOnInit() {
    }

}
