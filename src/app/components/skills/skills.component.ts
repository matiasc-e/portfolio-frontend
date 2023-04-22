import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/models/skills';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public skills : Skills[] = [];
  public editSkills : Skills | undefined;
  public deleteSkills : Skills | undefined;

  constructor(private dataSkills:SkillsService){}


  public onActionSkills() : void {
    this.getSkills()
  }

  ngOnInit(): any {
    this.getSkills()
  }


  public getSkills() : void {
    this.dataSkills.getSkills().subscribe({
      next: (res : Skills[]) => this.skills = res,
      error : (error : HttpErrorResponse) => console.error(error.message)
    })
  }

  public onOpenModal(mode: string, skills : Skills) : void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteSkills = skills;
      button.setAttribute('data-bs-target', '#btn-delete-skills');
    } else if (mode === 'edit') {
      this.editSkills = skills;
      button.setAttribute('data-bs-target', '#btn-edit-skills');
    }

    container?.appendChild(button);
    button.click();
  }


}
