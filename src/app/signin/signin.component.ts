import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:any={};
  msgError!:string
  constructor(private signupService:SignupService, private router:Router) { }

  ngOnInit(): void {
  }

  signin(){
    this.signupService.signin(this.user).subscribe(
      (data)=> {
        console.log('Data after login',data);
        if (data.message == '0') {
          this.msgError = 'Please Check your email';
        } else  if (data.message == '1')  {
          this.msgError = 'Please Check your PWD';
        } else if (this.user.email == "houda@gmail.com") {
          console.log();
          localStorage.setItem("connectedUser",JSON.stringify(data.user));
          this.router.navigate(['transfert-request'])
          
        }
        else
        
        this.router.navigate(['home-user'])
        localStorage.setItem("connectedUser",JSON.stringify(data.user));
      }
    );
  }
}
