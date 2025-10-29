import { Component } from "@angular/core";

@Component({
    selector:'app-user',
    templateUrl:'./user.componant.html',
    styleUrls :['./user.componant.scss']
})
export class UserComponant{
    skills : Array<string>=['HTML', 'CSS', 'JS', 'Rxjs', 'Ngrx']
}