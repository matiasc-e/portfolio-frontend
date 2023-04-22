import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {
  @Output() educationAdded: EventEmitter<void> = new EventEmitter<void>()
  constructor(private dataEducation : EducationService, private toastr: ToastrService){}

  public onAddEducation(addForm : NgForm): void {
    this.dataEducation.addEducation(addForm.value).subscribe({
      next: (res : Education) => {
        addForm.reset()
        this.educationAdded.emit()
        this.toastr.success('Nueva educación creada!', 'Éxito', {
        progressBar: true,
        closeButton: true
        });
      },
      error : (error : HttpErrorResponse) => {
        console.error(error.message)
        addForm.reset()
          this.toastr.error('Algo salio mal!', 'Error', {
        progressBar: true,
        closeButton: true
        });
      }
    })
  }




}
