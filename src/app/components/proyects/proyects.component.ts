import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Proyects } from 'src/app/models/proyects';
import { AuthService } from 'src/app/services/auth.service';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  public proyects : Proyects[] = [];
  public deleteProyects : Proyects | undefined;
  public editProyects : Proyects | undefined;
  constructor(private dataProyects:ProyectsService, private authService : AuthService){}

  public onActionProyects(): void {
    this.getProyects();
  }

  ngOnInit():any {
    this.getProyects()
  }

  public getProyects () : void {
    this.dataProyects.getProyects().subscribe({
      next: (res : Proyects[]) => this.proyects = res,
      error : (error : HttpErrorResponse) => console.error(error.message)
    })
  }

  public onOpenModal(mode: string, proyects : Proyects) : void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteProyects = proyects;
      button.setAttribute('data-bs-target', '#btn-delete-proyects');
    } else if (mode === 'edit') {
      this.editProyects = proyects;
      button.setAttribute('data-bs-target', '#btn-edit-proyects');
    }
    container?.appendChild(button);
    button.click();
  }

  public isLogged () : boolean {
    return this.authService.isLogged()
  }

}
