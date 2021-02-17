import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder) { }

  registerForm: FormGroup = new FormGroup({});

  username = '';
  password = '';
  userRole: any;
  submitted = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.loginService.submit(this.username, this.password);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }



}
