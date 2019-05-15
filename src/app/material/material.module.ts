import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatDialogModule, MatDialogRef,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatSidenavModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material';

const arrayModules = [
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...arrayModules
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  exports: [...arrayModules]
})
export class MaterialModule {

}
