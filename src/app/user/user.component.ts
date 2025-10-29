import { Component } from "@angular/core";

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls :['./user.component.scss']
})
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

export class UserComponent{
    skills : Array<string>=['HTML', 'CSS', 'JS', 'Rxjs', 'Ngrx']
}