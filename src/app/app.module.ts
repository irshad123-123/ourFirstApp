import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponant } from './product/product.componant';
import { UserComponant } from './user/user.componant';
import { InfoComponant } from './info/info.componant';
import { SkillsComponant } from './skills/skills.componant';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponant,
    UserComponant,
    InfoComponant,
    SkillsComponant
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
