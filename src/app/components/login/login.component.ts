import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.handleloginForm();
  }

  handleloginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleLogin() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (email === 'demo' && password === 'demo') {
        this._dataSharingService.setUserRegister(true);
        this.router.navigateByUrl('post');
        this.loginForm.reset()
      }else{
        console.log('Invalid Email And Password')
      }
    } else {
    }
  }
}
