import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-skills',
  templateUrl: './delete-skills.component.html',
  styleUrls: ['./delete-skills.component.css']
})
export class DeleteSkillsComponent {
  @Input() deleteSkills : Skills | undefined;
  @Output() skillsDeleted: EventEmitter<void> = new EventEmitter<void>()

  public loading : boolean = false
  constructor(private dataSkills : SkillsService, private toastr: ToastrService){}

  public onDeleteSkills (idSk : number) : void {
    const onClose = document.getElementById('delete-form-skills')
    this.loading = true
    this.dataSkills.deleteSkills(idSk).subscribe({
      next : (res : void) => {
        this.skillsDeleted.emit()
        this.loading = false

        onClose?.click()
         this.toastr.success('Eliminado con exito', 'Éxito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
         });
      },
      error: (error : HttpErrorResponse) => {
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
