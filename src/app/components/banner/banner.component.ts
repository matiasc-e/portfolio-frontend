import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  data:any
  constructor(private dataPortafolio:InfoService){}

  ngOnInit():void {
    this.dataPortafolio.getData().subscribe(d => {
      this.data = d.banner
    })
  }

}
