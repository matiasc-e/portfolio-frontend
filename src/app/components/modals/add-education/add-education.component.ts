import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {
  @Output() educationAdded: EventEmitter<void> = new EventEmitter<void>()
  constructor(private dataEducation : EducationService){}

  // public getEducation () : void {
  //   this.dataEducation.getEducation().subscribe({
  //     next : (res : Education[]) => this.educations = res,
  //     error : (error : HttpErrorResponse) => console.error(error.message)
  //   })
  // }

  public onAddEducation(addForm : NgForm): void {
    this.dataEducation.addEducation(addForm.value).subscribe({
      next: (res : Education) => {
        // this.getEducation()
        addForm.reset()
        this.educationAdded.emit()
      },
      error : (error : HttpErrorResponse) => {
        console.error(error.message)
        addForm.reset()
      }
    })
  }
}
