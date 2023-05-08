import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-experience',
  templateUrl: './delete-experience.component.html',
  styleUrls: ['./delete-experience.component.css']
})
export class DeleteExperienceComponent {
  @Input() deleteExperience : Experience | undefined;
  @Output() experienceDeleted: EventEmitter<void> = new EventEmitter<void>()
  public loading : boolean = false

  constructor(private dateExperience : ExperienceService,  private toastr: ToastrService){}
  public onDeleteExperience(idExp : number) : void {
    const onClose = document.getElementById('delete-experience-form')
    this.loading = true
    this.dateExperience.deleteExperience(idExp).subscribe({
      next : (res : void) => {
        this.experienceDeleted.emit()
        this.loading = false

        this.toastr.success('Eliminado con exito', 'Éxito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
      });
        onClose?.click()
      },
     error : (error : HttpErrorResponse) => {
      console.error(error.message)
       this.toastr.error('Algo salio mal', 'Error', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
      onClose?.click()
     } 
    })
  }
}
