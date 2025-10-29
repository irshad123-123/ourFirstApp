import { Component } from "@angular/core";
import { profile } from "console";

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls : ['./product.companent.scss']
})
export class ProductComponent{
    productName:string='OPPO f19'
    productId : string = 'D-123'
    UserInfo = {
        fname:'Irshad',
        lname:'Shaikh',
        nativePlace:'Udgir',
        profile:'Fronend Developer'
    }
}