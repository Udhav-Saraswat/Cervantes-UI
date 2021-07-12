import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';


@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerLoginComponent 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AngularMaterialModule
  ]
})
export class CustomerModule { }
