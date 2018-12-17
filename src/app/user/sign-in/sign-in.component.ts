import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  constructor(private userService : UserService,private router : Router,private toastr:ToastrService) { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
     this.userService.userAuthentication(form.value).subscribe((data : any)=>{
       
      localStorage.setItem('userToken',data.token);
      if(data.error==undefined)
      {
      console.log("error",data.error);
      this.toastr.success('User Loged in Successfully');
      this.router.navigate(['/home']);
      }
     else
      {
        this.toastr.error('User Loged inSuccessfulllly');
        
      }
      
    },
    (error)=>{
      this.toastr.error('Login Unsuccessfull');
     console.log(error);
    });
  }

}
