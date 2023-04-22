import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyects } from 'src/app/models/proyects';
import { ProyectsService } from 'src/app/services/proyects.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-proyects',
  templateUrl: './delete-proyects.component.html',
  styleUrls: ['./delete-proyects.component.css']
})
export class DeleteProyectsComponent {
  @Input() deleteProyects : Proyects | undefined;
  @Output() proyectsDeleted: EventEmitter<void> = new EventEmitter<void>()

  constructor(private dataProyects : ProyectsService, private toastr: ToastrService){}

  public onDeleteProyects (idPro : number) : void {
    const onClose = document.getElementById('delete-form-proyects')
    this.dataProyects.deleteProyects(idPro).subscribe({
      next : (res : void) => {
        this.proyectsDeleted.emit()
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
