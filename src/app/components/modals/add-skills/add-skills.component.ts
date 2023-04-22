import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {

  @Output() skillsAdded: EventEmitter<void> = new EventEmitter<void>()


  constructor(private dataSkills:SkillsService){}

  public onAddSkills(addForm : NgForm) : void {
    this.dataSkills.addSkills(addForm.value).subscribe({
      next:(res : Skills) => this.skillsAdded.emit(),
      error: (error : HttpErrorResponse) => console.error(error.message)
    })
  }

}
