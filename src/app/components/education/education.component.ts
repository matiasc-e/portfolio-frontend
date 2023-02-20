import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  info:any
  constructor(private dataPortafolio:InfoService){}

  ngOnInit():void{
    this.dataPortafolio.getData().subscribe(d => {
      this.info = d.education
    })
  }

}
