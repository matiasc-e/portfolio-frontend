import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  info: any
  constructor(private dataPortafolio:InfoService){}

  ngOnInit():any {
    this.dataPortafolio.getData().subscribe(d => {
      this.info = d.proyects
    })
  }

  addProyects() {
    
  }

}
