import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {
  static confirmPassword(control: AbstractControl) {
    const password = control.get('password').value;

    const confirmPassword = control.get('confirmPassword').value.toString();
    if (!confirmPassword) {
      return control.get('confirmPassword').setErrors( {required: true} );
    }

    if (password !== confirmPassword) {
      return control.get('confirmPassword').setErrors( {ConfirmPassword: true} );
    } else {
      return null;
    }
  }
}
