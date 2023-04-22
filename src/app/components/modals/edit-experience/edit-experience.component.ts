import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-experience', 
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent {
  @Input() editExperience : Experience | undefined
  @Output() updatedExperience: EventEmitter<void> = new EventEmitter<void>() 

  constructor(private dataExperience : ExperienceService, private toastr: ToastrService){}


  public onUpdateExperience (experienceToUpdate : Experience) : void {
    const onClose = document.getElementById("edit-experience-form")
    this.dataExperience.updateExperience(experienceToUpdate).subscribe({
      next: (res : Experience) => {
        this.updatedExperience.emit()
        onClose?.click()
        this.toastr.info(`${this.editExperience?.titleExp}, ha sido modificado `, 'Exito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        })
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
