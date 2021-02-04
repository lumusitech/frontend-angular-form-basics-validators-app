import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.sass']
})
export class FormModelComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        this.onlyLettersValidator
      ]),

      lastname: new FormControl("", [
        Validators.required,
        this.onlyLettersValidator
      ]),

      email: new FormControl("", [
        Validators.required
      ]),

      password: new FormControl("", [
        Validators.required
      ]),
      repeat_password: new FormControl("", [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    const emailValidator = this.form.controls.email;
    emailValidator.valueChanges.pipe(debounceTime(500)).subscribe(values => console.log(values));
  }

  onlyLettersValidator(form: any) {
    let value = form.value;
    if (/^[a-zA-Z\s^/d]*$/.test(value)) return null;
    return { onlyletters: { error: 'it is allow only letters' } };
  }

  onSubmit() {
    console.log(this.form.value);
    this.form = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        this.onlyLettersValidator
      ]),

      lastname: new FormControl("", [
        Validators.required,
        this.onlyLettersValidator
      ]),

      email: new FormControl("", [
        Validators.required
      ]),

      password: new FormControl("", [
        Validators.required
      ]),

      repeat_password: new FormControl("", [
        Validators.required
      ])
    });
  }

}
