import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyects } from 'src/app/models/proyects';
import { ProyectsService } from 'src/app/services/proyects.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-proyects',
  templateUrl: './add-proyects.component.html',
  styleUrls: ['./add-proyects.component.css']
})
export class AddProyectsComponent {
  @Output() proyectAdded: EventEmitter<void> = new EventEmitter<void>()
  public loading : boolean = false
  
  constructor(private dataProyects : ProyectsService , private toastr: ToastrService) {}

  public onAddProyects (addForm : NgForm) : void {
    this.loading = true
    this.dataProyects.addProyects(addForm.value).subscribe({
      next: (res : Proyects) => {
        this.proyectAdded.emit()
        this.loading = false

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
