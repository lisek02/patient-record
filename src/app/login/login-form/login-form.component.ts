import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.html'
})

export class LoginFormComponent implements OnInit {
  loginData: FormGroup;
  
  @Output() login = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginData = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit(loginData) {
    this.login.emit(loginData.value);
  }
}