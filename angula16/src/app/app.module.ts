import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { ProductlistComponent } from './page/productlist/productlist.component';


@NgModule({
  declarations: [
    AppComponent,
    

         LayoutComponent,
               ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
