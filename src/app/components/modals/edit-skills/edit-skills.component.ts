import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent {
  @Input() editSkills : Skills | undefined;
  @Output() skillsUpdated: EventEmitter<void> = new EventEmitter<void>()

  public loading : boolean = false
  
  constructor(private dataSkills : SkillsService, private toastr: ToastrService){}

  onUpdateSkills(skillToUpdate : Skills) :void {
    const onClose = document.getElementById("update-skills-form")
    this.loading = true

    this.dataSkills.updateSkills(skillToUpdate).subscribe({
      next: (res : Skills) => {
        this.skillsUpdated.emit()
        this.loading = false

        onClose?.click()
        
        this.toastr.info(`${this.editSkills?.nameSk}, ha sido modificado `, 'Exito', {
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
