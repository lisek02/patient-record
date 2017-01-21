import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Patient from '../../patient.model';

@Component({
  selector: 'patient-form',
  templateUrl: 'patient-form.html'
})

export class PatientFormComponent implements OnInit {
  userData: FormGroup;
  @Input() user: Patient;
  @Output() onSubmit = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    ) {}

  ngOnInit() {
    this.userData = this.fb.group({
      first_name: [this.user.first_name, []],
      last_name: [this.user.last_name, []],
      email: [this.user.email, []],
      last_login: [this.user.last_login, []],
      profile: this.fb.group({
        birth_date: [this.user.profile.birth_date, []],
        gender: [this.user.profile.gender, []],
        address: [this.user.profile.address, [Validators.required]],
        city: [this.user.profile.city, [Validators.required]],
        zip_code: [this.user.profile.zip_code, [Validators.required]],
        pesel: [this.user.profile.pesel, []],
        avatar: [this.user.profile.avatar || '', []],
      })
    });
  }

  submit(user) {
    if (this.userData.valid) {
      this.onSubmit.emit(user);
    }
  }
}