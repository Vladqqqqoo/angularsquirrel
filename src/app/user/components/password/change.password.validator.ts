import {AbstractControl} from '@angular/forms';

export class ChangePasswordValidator {
    static confirmPassword(control: AbstractControl) {
      const password = control.get('oldPassword').value;

      const confirmPassword = control.get('newPassword').value;
      if (!confirmPassword) {
        return control.get('newPassword').setErrors( {required: true} );
      }

      if (password === confirmPassword) {
        return control.get('newPassword').setErrors( {ConfirmPassword: true} );
      } else {
        return null;
      }
  }
}
