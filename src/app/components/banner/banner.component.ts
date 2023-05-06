import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';
import { Info } from 'src/app/models/info';
import { AuthService } from 'src/app/services/auth.service';
import { BannerService } from 'src/app/services/banner.service';
import { EducationService } from 'src/app/services/education.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  public user : Info | undefined;
  public education : Education | undefined;
  constructor(private dataInfo:BannerService, private dataEducation:EducationService, private authService : AuthService){}

  ngOnInit():void {
    this.getInfo()
    this.getEducation()
  }

  public getInfo(): void {
    this.dataInfo.getInfo().subscribe({
      next : (data : Info) => this.user = data,
      error: (error : HttpErrorResponse) => console.error(error)
    })
  }

  public getEducation() : void {
    this.dataEducation.getEducation().subscribe({
      next : (data : Education[]) => this.education = data[0]
    })
  }

  public isLogged () : boolean {
   return this.authService.isLogged()
  }

}
