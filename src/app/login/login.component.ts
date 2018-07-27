import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../product/product.service';
import { Router } from '@angular/router';
import { jsonpFactory } from '@angular/http/src/http_module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private router: Router,

    private regiService: RegisterService
  ) { }

  public loginForm: FormGroup

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })

  }

  login() {
    
    if (this.loginForm.status == "INVALID") {
      alert("Enter the Email")
    } else {
      console.log("In")
      this.regiService.login(this.loginForm.value)

        .subscribe(
          (response) => {
            var userData ={
              id :response.user._id,
              token:response.userToken
            }
            localStorage.setItem('userData', JSON.stringify(userData));
            this.router.navigate(['./profile']);
          }
        )

    }

  }


}
