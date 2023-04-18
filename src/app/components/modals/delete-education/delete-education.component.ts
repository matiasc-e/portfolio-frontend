import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-delete-education',
  templateUrl: './delete-education.component.html',
  styleUrls: ['./delete-education.component.css']
})
export class DeleteEducationComponent {
 @Input() deleteEducation : Education | undefined;
 @Output() educationDelete: EventEmitter<void> = new EventEmitter<void>()
 constructor(private dataEducation : EducationService){}

 public onDeleteEducation(idEdu : number) : void {
  const onClose = document.getElementById('delete-education-form')
  this.dataEducation.deleteEducation(idEdu).subscribe({
    next : (res : void) => {
      this.educationDelete.emit()
      onClose?.click()
    },
    error : (error : HttpErrorResponse) => console.error(error.message)
  })
 }

}
