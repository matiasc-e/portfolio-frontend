import { Component } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { Info } from 'src/app/models/info';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent {

  public info : Info | undefined;
  public loading : boolean = true
  public loadUpdate : boolean = false
  constructor(private dataInfo:BannerService, private toastr: ToastrService){}


  ngOnInit():void {
    this.getInfo()
  }

  public getInfo(): void {
    this.dataInfo.getInfo().subscribe({
      next : (data : Info) => {
        this.info = data
        this.loading = false
      },
      error: (error : HttpErrorResponse) => console.error(error)
    })
  }

  public onUpdateInfo(newInfoUpdate : Info) : void {
    this.loadUpdate = true
    this.dataInfo.updateInfo(newInfoUpdate).subscribe({
      next: (res : Info) => {
        this.toastr.info('Tus datos han sido modifcado correctamente', 'Exito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
        this.loadUpdate = false
        this.getInfo()
      },
      error : (error : HttpErrorResponse) => {
        this.toastr.info('Algo salio mal!', 'Exito', {
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
        console.error(error.message)
      }
    })
  }

}
