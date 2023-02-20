import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  info : any


  constructor(private dataPortafolio:InfoService){}

  ngOnInit() : void{
    this.dataPortafolio.getData().subscribe(d => {
      this.info = d.skills
    })
  }
}
