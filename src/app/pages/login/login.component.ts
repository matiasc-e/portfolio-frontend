import { Component } from '@angular/core';

import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {

  user : User = {
    email : '',
    password : ''
  }

  public loading : boolean = false

  constructor(private dataLogin : LoginService, private router : Router, private toastr: ToastrService){}

  public login(authForm : NgForm) {
    this.loading = true
    this.dataLogin.login(authForm.value).subscribe({
      next : (res : any) => {
        this.loading = false
        this.router.navigate(['/'])
        this.toastr.success('Se ha logueado correctamente', 'Exito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
      },
      error : (error : HttpErrorResponse) => {
        console.error(error.message)
        authForm.reset()
          this.toastr.error('Algo salio mal!', 'Error', {
        progressBar: true,
        closeButton: true,
        positionClass: 'toast-bottom-right'
        });
      }
    })
  }



}
