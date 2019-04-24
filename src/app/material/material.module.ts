import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatMenuModule} from "@angular/material";

const arrayModules = [
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
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
