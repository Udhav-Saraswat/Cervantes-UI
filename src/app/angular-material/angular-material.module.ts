//***************Csutom File ---> to be used only for Angular material Imports****************************//

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class AngularMaterialModule { }
