import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {
 @Input() editEducation : Education | undefined;
 @Output() educationUpdated: EventEmitter<void> = new EventEmitter<void>()
 public loading : boolean = false


  constructor(private dateEducation : EducationService, private toastr: ToastrService){}

  public onUpdateEducation (educationToUpdate : Education) : void {
    const onClose = document.getElementById("edit-education-form")
    this.loading = true
    this.dateEducation.updateEducation(educationToUpdate).subscribe({
      next : (res : Education) => {
        this.educationUpdated.emit()
        this.loading = false
        onClose?.click()
        this.toastr.info(`${this.editEducation?.titleEdu}, ha sido modificado `, 'Exito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
      },
      error : (error : HttpErrorResponse) => {
        console.error(error.message)
        onClose?.click()
        this.toastr.error('Algo salio mal!', 'error', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
      }    
    })
  }

}
