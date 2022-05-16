import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm! : FormGroup

  constructor(private fb : FormBuilder, private sigunpService:SignupService ) { }

  ngOnInit(){
    this.signupForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(6),Validators.required]]
    })
    
    
  }


  signup(x:any){
// this.sigunpService.signup(x).subscribe((data)=>{

// })

  }
}
