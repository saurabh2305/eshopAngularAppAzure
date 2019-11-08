import { Component, OnInit } from '@angular/core';
import { CatalogItem } from 'src/app/models/catalog-item';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    product: CatalogItem;

    constructor(private catalogSvc: CatalogService) {
        this.product = {
            name: "",
            price: 0,
            quantity: 0,
            reorderLevel: 0,
            manufacturingDate: undefined,
        }
    }

    ngOnInit() {
    }

    save(frm, img) {
        if (frm.valid) {
            let formData: FormData = new FormData();
            formData.append("name", this.product.name);
            formData.append("price", this.product.price.toString());
            formData.append("quantity", this.product.quantity.toString());
            formData.append("reorderLevel", this.product.reorderLevel.toString());
            formData.append("manufacturingDate", this.product.manufacturingDate.toString());
            formData.append("image", img.files[0], img.files[0].name);
            //save to server using Web API  
            this.catalogSvc.addProduct(formData)
                .subscribe(
                    result => {
                        alert("Added successfully");
                    },
                    err => {
                        console.log(err);
                        alert("Error in adding product")
                    }
                );
        } else {
            alert("Invalid form data");
        }
    }

}
