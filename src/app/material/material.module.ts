import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatSidenavModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

const arrayModules = [
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
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
