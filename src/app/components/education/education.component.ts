import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public educations : Education[] = [];
  public editEducation : Education | undefined;
  public deleteEducation : Education | undefined;
  constructor(private dataEducation:EducationService){}

  ngOnInit():void{
    this.getEducation()
  }

  public getEducation (): void {
    this.dataEducation.getEducation().subscribe({
      next :(res : Education[]) => this.educations = res,
      error: (error: HttpErrorResponse) =>  console.error(error.message)
    })
  }

  public onActionEducation(): void {
    this.getEducation();
  }

  public onOpenModal(mode: string, education : Education) : void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteEducation = education;
      button.setAttribute('data-bs-target', '#btn-delete-education');
    } else if (mode === 'edit') {
      this.editEducation = education;
      button.setAttribute('data-bs-target', '#btn-edit-education');
    }

    container?.appendChild(button);
    button.click();
  }

}
