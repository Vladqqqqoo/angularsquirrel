import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule} from "@angular/material";

const arrayModules = [
  MatMenuModule,
  MatButtonModule,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...arrayModules
  ],
  exports: [...arrayModules]
})
export class MaterialModule {

}
