import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService : AuthService, private router : Router, private toastr : ToastrService) {}


  public isLogged () : boolean {
   return this.authService.isLogged()
  }  

  public logout () : void {
    this.authService.logout()
    this.router.navigate(['/login'])
    this.toastr.info(`Nos vemos pronto!`, 'Exito', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right'          
    })
  }
}
