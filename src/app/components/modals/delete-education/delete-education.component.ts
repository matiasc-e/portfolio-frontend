import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-education',
  templateUrl: './delete-education.component.html',
  styleUrls: ['./delete-education.component.css']
})
export class DeleteEducationComponent {
 @Input() deleteEducation : Education | undefined;
 @Output() educationDelete: EventEmitter<void> = new EventEmitter<void>()
 constructor(private dataEducation : EducationService,  private toastr: ToastrService){}

 public onDeleteEducation(idEdu : number) : void {
  const onClose = document.getElementById('delete-education-form')
  this.dataEducation.deleteEducation(idEdu).subscribe({
    next : (res : void) => {
      this.educationDelete.emit()
      this.toastr.success('Eliminado con exito', 'Éxito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
      });
      onClose?.click()
    },
    error : (error : HttpErrorResponse) => {
      console.error(error.message)
      onClose?.click()
      this.toastr.error('Algo salio mal', 'Error', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
      });
    }
  })
 }

}
