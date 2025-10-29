import { Component } from "@angular/core";
import { profile } from "console";

@Component({
    selector:'app-product',
    templateUrl:'./product.componant.html',
    styleUrls : ['./product.companant.scss']
})
export class ProductComponant{
    productName:string='OPPO f19'
    productId : string = 'D-123'
    UserInfo = {
        fname:'Irshad',
        lname:'Shaikh',
        nativePlace:'Udgir',
        profile:'Fronend Developer'
    }
}