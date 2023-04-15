import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';
import { User } from 'src/app/models/user';
import { BannerService } from 'src/app/services/banner.service';
import { EducationService } from 'src/app/services/education.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  public user : User | undefined;
  public education : Education | undefined;
  constructor(private dataUser:BannerService, private dataEducation:EducationService){}

  ngOnInit():void {
    this.getUser()
    this.getEducation()
  }

  public getUser(): void {
    this.dataUser.getUser().subscribe({
      next : (data : User) => this.user = data,
      error: (error : HttpErrorResponse) => console.error(error)
    })
  }

  public getEducation() : void {
    this.dataEducation.getEducation().subscribe({
      next : (data : Education[]) => this.education = data[0]
    })
  }

}
