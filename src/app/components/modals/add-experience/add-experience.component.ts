import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
  @Output() experienceAdded: EventEmitter<void> = new EventEmitter<void>()

  constructor(private dateExperience : ExperienceService , private toastr: ToastrService){}

  public onAddExperience(addForm : NgForm) : void {
    this.dateExperience.addExperience(addForm.value).subscribe({
      next : (res : Experience) => {
        addForm.reset()
        this.experienceAdded.emit()
        this.toastr.success('Nueva experiencia creada!', 'Éxito', {
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
