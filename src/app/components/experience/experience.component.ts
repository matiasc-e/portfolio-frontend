import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  public experiences : Experience[] = [];
  public deleteExperience : Experience | undefined;
  public editExperience : Experience | undefined;

  constructor(private dataExperience : ExperienceService, private authService : AuthService){}

  
  public onActionExperience(): void {
    this.getExperience();
  }

  ngOnInit():void {
    this.getExperience()
  }

  public getExperience () : void {
    this.dataExperience.getExperience().subscribe({
      next : (res : Experience[]) => this.experiences = res,
      error : (error : HttpErrorResponse) => console.error(error.message)
    })
  }

  public onOpenModal(mode: string, experience : Experience) : void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteExperience = experience;
      button.setAttribute('data-bs-target', '#btn-delete-experience');
    } else if (mode === 'edit') {
      this.editExperience = experience;
      button.setAttribute('data-bs-target', '#btn-edit-experience');
    }

    container?.appendChild(button);
    button.click();
  }

  public isLogged () : boolean {
    return this.authService.isLogged()
  }
  
}
