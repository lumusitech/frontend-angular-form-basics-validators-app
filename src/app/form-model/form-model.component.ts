import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.sass'],
})
export class FormModelComponent implements OnInit {
  form: UntypedFormGroup;

  constructor() {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        this.onlyLettersValidator,
      ]),

      lastname: new UntypedFormControl('', [
        Validators.required,
        this.onlyLettersValidator,
      ]),

      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),

      password: new UntypedFormControl('', [Validators.required]),
      repeat_password: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const emailValidator = this.form.controls.email;
    emailValidator.valueChanges
      .pipe(debounceTime(500))
      .subscribe((values) => console.log(values));
  }

  onlyLettersValidator(form: any) {
    let value = form.value;
    if (/^[a-zA-Z\s^/d]*$/.test(value)) return null;
    return { onlyletters: { error: 'it is allow only letters' } };
  }

  onSubmit() {
    console.log(this.form.value);
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        this.onlyLettersValidator,
      ]),

      lastname: new UntypedFormControl('', [
        Validators.required,
        this.onlyLettersValidator,
      ]),

      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),

      password: new UntypedFormControl('', [Validators.required]),

      repeat_password: new UntypedFormControl('', [Validators.required]),
    });
  }
}
