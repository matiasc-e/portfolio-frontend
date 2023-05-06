import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/models/skills';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {

  @Output() skillsAdded: EventEmitter<void> = new EventEmitter<void>()


  constructor(private dataSkills:SkillsService, private toastr : ToastrService){}

  public onAddSkills(addForm : NgForm) : void {
    this.dataSkills.addSkills(addForm.value).subscribe({
      next:(res : Skills)=> {
        this.skillsAdded.emit()
        addForm.reset()
        this.toastr.success('Nuevo proyecto creado!', 'Éxito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
      },
      error : (error : HttpErrorResponse) => {
        console.error(error.message)
        addForm.reset()
        this.toastr.error('Algo salio mal!', 'Error', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

}
