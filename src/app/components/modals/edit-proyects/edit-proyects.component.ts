import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Proyects } from 'src/app/models/proyects';
import { ProyectsService } from 'src/app/services/proyects.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit-proyects',
  templateUrl: './edit-proyects.component.html',
  styleUrls: ['./edit-proyects.component.css']
})
export class EditProyectsComponent {
  @Input() editProyects : Proyects | undefined
  @Output() updatedProyects: EventEmitter<void> = new EventEmitter<void>() 

  public loading : boolean = false

  constructor(private dataProyects : ProyectsService, private toastr: ToastrService){}

   public onUpdateProyects (proyectToUpdate : Proyects) : void {
    const onClose = document.getElementById("edit-form-proyects")
    this.loading = true
    this.dataProyects.updateProyects(proyectToUpdate).subscribe({
      next: (res : Proyects) => {
        this.updatedProyects.emit()
        this.loading = false
        onClose?.click()
        this.toastr.info(`${this.editProyects?.titlePro}, ha sido modificado `, 'Exito', {
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

