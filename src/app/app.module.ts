import { CustomerModule } from './customer/customer.module';
import { AngularMaterialModule } from './angular-material/angular-material.module'; // has to import custom material module we created
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
